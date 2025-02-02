import type { Database } from "@/types/supabase";
type User = Database["public"]["Tables"]["users"]["Row"];
import { SubscriptionBadge } from "@/components/dashboard/subscription-badge";
import { UsageStats } from "@/components/dashboard/usage-stats";

interface DashboardHeaderProps {
  user: User | null;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  if (!user) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome, {user.name || "User"}
          </h1>
          <p className="text-gray-400 mt-1">
            Let's create some amazing content
          </p>
        </div>
        <SubscriptionBadge plan={user.role} />
      </div>
      <UsageStats userId={user.id} />
    </div>
  );
}
