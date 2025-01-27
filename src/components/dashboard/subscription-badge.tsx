interface SubscriptionBadgeProps {
  plan: string;
}

export function SubscriptionBadge({ plan }: SubscriptionBadgeProps) {
  const getBadgeColor = () => {
    switch (plan) {
      case "PRO":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "ENTERPRISE":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div
      className={`px-3 py-1 rounded-full text-sm font-medium border ${getBadgeColor()}`}
    >
      {plan === "FREE"
        ? "Free Plan"
        : `${plan.charAt(0) + plan.slice(1).toLowerCase()} Plan`}
    </div>
  );
}
