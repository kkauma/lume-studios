"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

export function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Don't show navbar on auth pages
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return null;
  }

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      // Sign out from NextAuth with callback
      await signOut({
        redirect: false,
        callbackUrl: "/login",
      });

      // Show success message
      toast({
        title: "Logged out successfully",
        description: "You have been securely logged out.",
      });

      // Redirect to login page
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        title: "Logout failed",
        description:
          "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Determine what button to show based on authentication status
  const renderAuthButton = () => {
    if (status === "loading") {
      return <div className="w-20 h-9 bg-gray-800 rounded-lg animate-pulse" />;
    }

    if (session?.user) {
      return (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">{session.user.email}</span>
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Logging out..." : "Logout"}
          </button>
        </div>
      );
    }

    return (
      <Link
        href="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Login
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Lume Studios
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white">
              FAQ
            </Link>

            {renderAuthButton()}
          </div>
        </div>
      </div>
    </nav>
  );
}
