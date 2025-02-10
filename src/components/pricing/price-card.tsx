"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface PriceCardProps {
  name: string;
  price: string | "Custom";
  description?: string;
  features: string[];
  highlighted?: boolean;
  priceId?: string;
}

export function PriceCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  priceId,
}: PriceCardProps) {
  const handleSubscribe = async () => {
    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`relative rounded-2xl border ${
        highlighted
          ? "border-blue-500 bg-blue-500/5"
          : "border-gray-800 bg-gray-900/50"
      } p-8 shadow-lg backdrop-blur-sm`}
    >
      {highlighted && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-1 text-sm font-medium text-white">
          Popular Choice
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        {description && <p className="mt-2 text-gray-400">{description}</p>}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          {price === "Custom" ? (
            <span className="text-5xl font-bold text-white">Custom</span>
          ) : (
            <>
              <span className="text-5xl font-bold text-white">${price}</span>
              <span className="ml-1 text-gray-400">/month</span>
            </>
          )}
        </div>
      </div>

      <ul className="mb-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-300">
            <Check className="mr-3 h-4 w-4 text-blue-500" />
            {feature}
          </li>
        ))}
      </ul>

      {price === "Custom" ? (
        <Link
          href="mailto:sales@lumestudios.com"
          className="block w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-center text-white hover:opacity-90 transition-opacity"
        >
          Contact Sales
        </Link>
      ) : price === "0" ? (
        <Link
          href="/signup"
          className="block w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-center text-white hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      ) : (
        <Button
          onClick={handleSubscribe}
          className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3"
        >
          Subscribe Now
        </Button>
      )}
    </div>
  );
}
