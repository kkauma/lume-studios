import { LoginForm } from "@/components/auth/login-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

interface LoginPageProps {
  searchParams?: {
    message?: string;
    redirectTo?: string;
  };
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  // Check if user is already logged in
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect(searchParams?.redirectTo || "/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Background gradient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="relative bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome back</h1>
            <p className="mt-2 text-gray-400">
              Sign in to your account to continue
            </p>
          </div>

          {searchParams?.message && (
            <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded text-center text-sm">
              {searchParams.message}
            </div>
          )}

          <LoginForm redirectTo={searchParams?.redirectTo} />
        </div>
      </div>
    </div>
  );
}
