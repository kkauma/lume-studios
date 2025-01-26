import { PriceCard } from "@/components/pricing/price-card";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2c] to-gray-900">
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PriceCard
            name="Free"
            price="0"
            description="Perfect for trying out our services"
            features={[
              "5 AI generations per month",
              "Basic templates",
              "Standard support",
              "1 user",
            ]}
          />

          <PriceCard
            name="Premium"
            price="49"
            description="For professionals and growing businesses"
            features={[
              "Unlimited AI generations",
              "Premium templates",
              "Priority support",
              "Advanced analytics",
              "Custom branding",
            ]}
            highlighted
            priceId={process.env.STRIPE_PRICE_ID_PRO}
          />

          <PriceCard
            name="Enterprise"
            price="Custom"
            description="For large organizations with custom needs"
            features={[
              "Everything in Premium",
              "Custom AI model training",
              "Dedicated account manager",
              "API access",
              "SSO & advanced security",
              "Custom integrations",
            ]}
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            All plans include our core features. View our{" "}
            <a href="/features" className="text-blue-400 hover:text-blue-300">
              full feature comparison
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
