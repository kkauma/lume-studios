import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";

async function handleSubscriptionChange(subscription: any) {
  const { data: user } = await supabase
    .from("users")
    .select()
    .eq("stripe_customer_id", subscription.customer)
    .single();

  if (!user) return;

  // Update user subscription status
  await supabase
    .from("users")
    .update({
      role: subscription.status === "active" ? "PRO" : "FREE",
      stripe_subscription_id: subscription.id,
      stripe_price_id: subscription.items.data[0].price.id,
      stripe_current_period_end: new Date(
        subscription.current_period_end * 1000
      ).toISOString(),
    })
    .eq("id", user.id);
}

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("Stripe-Signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("[STRIPE_WEBHOOK_ERROR]", error);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  const subscription = event.data.object as any;

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      await handleSubscriptionChange(subscription);
      break;
    default:
      console.warn(`Unhandled event type: ${event.type}`);
  }

  return new NextResponse(null, { status: 200 });
}

export const runtime = "edge";
