"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PriceCardProps {
  name: string;
  price: string;
  features: string[];
  priceId: string;
  highlighted?: boolean;
}

export function PriceCard({
  name,
  price,
  features,
  priceId,
  highlighted = false,
}: PriceCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, plan: name.toUpperCase() }),
      });

      const data = await response.json();
      if (data.url) {
        router.push(data.url);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`rounded-lg p-8 ${
        highlighted
          ? "border-2 border-primary shadow-lg"
          : "border border-border"
      }`}
    >
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-4 text-3xl font-bold">${price}</p>
      <p className="text-sm text-muted-foreground">per month</p>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-3">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={handleSubscribe}
        disabled={isLoading}
        className="mt-8 w-full"
        variant={highlighted ? "default" : "outline"}
      >
        {isLoading ? "Processing..." : "Subscribe Now"}
      </Button>
    </div>
  );
}
