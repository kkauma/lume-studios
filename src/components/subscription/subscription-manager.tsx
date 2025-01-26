"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SubscriptionManagerProps {
  subscription: {
    status: string;
    plan: string;
    currentPeriodEnd: string;
  };
}

export function SubscriptionManager({
  subscription,
}: SubscriptionManagerProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleManageSubscription = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
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
    <div className="rounded-lg border p-6">
      <h3 className="text-xl font-semibold">Your Subscription</h3>
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-medium">Plan:</span> {subscription.plan}
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          <span
            className={
              subscription.status === "active"
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {subscription.status}
          </span>
        </p>
        <p>
          <span className="font-medium">Next billing date:</span>{" "}
          {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
        </p>
      </div>
      <Button
        onClick={handleManageSubscription}
        disabled={isLoading}
        className="mt-6"
      >
        {isLoading ? "Loading..." : "Manage Subscription"}
      </Button>
    </div>
  );
}
