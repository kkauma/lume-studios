import { PLANS } from "@/lib/stripe";
import { PriceCard } from "@/components/pricing/price-card";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        <PriceCard
          name={PLANS.PRO.name}
          price="49"
          features={[...PLANS.PRO.features]}
          priceId={PLANS.PRO.price}
        />
        <PriceCard
          name={PLANS.ENTERPRISE.name}
          price="99"
          features={[...PLANS.ENTERPRISE.features]}
          priceId={PLANS.ENTERPRISE.price}
          highlighted
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Money Back Guarantee</h2>
        <p className="mt-4 text-muted-foreground">
          Try any plan risk-free for 14 days. If you're not completely
          satisfied, let us know and we'll refund your payment.
        </p>
      </div>
    </div>
  );
}
