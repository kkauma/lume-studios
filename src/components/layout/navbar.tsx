"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export function Navbar() {
  const pathname = usePathname();
  const { data: session, status, update } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Don't show navbar on auth pages
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return null;
  }

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      setIsMenuOpen(false);

      // Sign out from both auth providers
      await Promise.all([
        signOut({ redirect: false }),
        supabase.auth.signOut(),
      ]);

      // Clear all storage
      localStorage.clear();
      sessionStorage.clear();

      // Clear cookies
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      }

      // Force a complete page reload
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
      window.location.href = "/";
    }
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

            {status === "loading" ? (
              // Show loading state
              <div className="w-20 h-9 bg-gray-800 rounded-lg animate-pulse" />
            ) : session?.user ? (
              // Show logout button when logged in
              <button
                onClick={handleLogout}
                className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                Logout
              </button>
            ) : (
              // Show login button when logged out
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
