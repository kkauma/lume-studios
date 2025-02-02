import { ContentForm } from "@/components/content/content-form";
import { ContentList } from "@/components/content/content-list";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  try {
    // Get user data including subscription status
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (userError) {
      console.error("Error fetching user:", userError);
      throw new Error("Failed to fetch user data");
    }

    // Get user's recent content
    const { data: recentContent, error: contentError } = await supabase
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
        <div className="container mx-auto px-4 pt-24 pb-8">
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
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg p-4">
            Something went wrong. Please try again later.
          </div>
        </div>
      </div>
    );
  }
}
