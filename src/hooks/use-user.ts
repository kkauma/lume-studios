import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export function useUser() {
  const { data: session } = useSession();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!session?.user,
  };
}
