import { LoginForm } from "@/components/auth/login-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const session = await getServerSession(authOptions);

  // If user is already logged in, redirect to dashboard
  if (session?.user) {
    redirect("/dashboard");
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

          {searchParams?.error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-center text-sm">
              {searchParams.error === "CredentialsSignin"
                ? "Invalid email or password"
                : "An error occurred. Please try again."}
            </div>
          )}

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
