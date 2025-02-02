import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { headers } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lume Studios - AI Content Creation Platform",
  description: "Create high-quality content with AI-powered assistance",
};

async function getSupabaseSession() {
  const cookieStore = await headers();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name);
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Strict session validation
  if (
    !session?.user?.id ||
    !session?.access_token ||
    !session?.expires_at ||
    new Date(session.expires_at * 1000) < new Date()
  ) {
    return null;
  }

  return {
    ...session,
    expires: new Date(session.expires_at * 1000).toISOString(),
    user: {
      ...session.user,
      id: session.user.id,
      email: session.user.email || "",
      role: "user",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSupabaseSession();

  return (
    <html lang="en">
      <body>
        <Providers initialSession={session}>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
