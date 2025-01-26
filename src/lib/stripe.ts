import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const PLANS = {
  PRO: {
    name: "Pro",
    price: process.env.STRIPE_PRICE_ID_PRO!,
    features: [
      "Unlimited content generation",
      "Advanced editing tools",
      "Premium templates",
      "Full analytics suite",
    ],
  },
  ENTERPRISE: {
    name: "Enterprise",
    price: process.env.STRIPE_PRICE_ID_ENTERPRISE!,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Priority support",
      "API access",
      "Custom integrations",
    ],
  },
} as const;
