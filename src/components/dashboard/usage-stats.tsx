"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

interface UsageStatsProps {
  userId: string;
}

export function UsageStats({ userId }: UsageStatsProps) {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["usage-stats", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contents")
        .select("id", { count: "exact" })
        .eq("user_id", userId)
        .eq("created_at", new Date().toISOString().split("T")[0]);

      if (error) throw error;

      return {
        todayCount: data.length,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-800/50 rounded-lg p-4 animate-pulse">
          <div className="h-4 w-24 bg-gray-700 rounded mb-2" />
          <div className="h-6 w-12 bg-gray-700 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-gray-800/50 rounded-lg p-4">
        <p className="text-sm text-gray-400">Content Generated Today</p>
        <p className="text-2xl font-bold text-white">
          {stats?.todayCount || 0}
        </p>
      </div>
    </div>
  );
}
