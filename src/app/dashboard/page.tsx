import { ContentForm } from "@/components/content/content-form";
import { ContentList } from "@/components/content/content-list";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

// Create a Supabase client with the service role key for admin access
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  try {
    // Get user data including subscription status using admin client
    const { data: user, error: userError } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (userError) {
      console.error("Error fetching user:", userError);
      throw new Error("Failed to fetch user data");
    }

    // Get user's recent content
    const { data: recentContent, error: contentError } = await supabaseAdmin
      .from("contents")
      .select("*")
      .eq("user_id", session.user.id)
      .order("created_at", { ascending: false })
      .limit(5);

    if (contentError) {
      console.error("Error fetching content:", contentError);
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2c] to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <DashboardHeader user={user} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Content Creation Section */}
            <div className="space-y-6">
              <ContentForm />
            </div>

            {/* Recent Content Section */}
            <div className="space-y-6">
              <ContentList contents={recentContent || []} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2c] to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg p-4">
            Something went wrong. Please try again later.
          </div>
        </div>
      </div>
    );
  }
}
