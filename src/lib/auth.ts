import { createClient } from "@supabase/supabase-js";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
// Import your providers (e.g., GitHub, Google, etc.)

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Helper to check if user is authenticated
export async function checkUser() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (error) {
    console.error("Error checking auth status:", error);
    return null;
  }
  return session?.user || null;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Configure your auth providers here
  ],
  callbacks: {
    // Your callback functions
  },
  // Other options...
};
