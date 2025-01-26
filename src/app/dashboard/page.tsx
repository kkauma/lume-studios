import { ContentForm } from "@/components/content/content-form";
import { ContentEditor } from "@/components/content/content-editor";
import { SubscriptionManager } from "@/components/subscription/subscription-manager";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("id", session.user.id)
    .single();

  const subscription = user
    ? {
        status: user.stripe_subscription_id ? "active" : "inactive",
        plan: user.role,
        currentPeriodEnd:
          user.stripe_current_period_end || new Date().toISOString(),
      }
    : null;

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <SubscriptionManager subscription={subscription!} />
      </div>

      <h1 className="text-3xl font-bold mb-8">Content Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Generate New Content</h2>
          <ContentForm />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Editor</h2>
          <ContentEditor
            onSave={async (content) => {
              // Handle save
              console.log("Saving content:", content);
            }}
          />
        </div>
      </div>
    </div>
  );
}
