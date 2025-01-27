"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-gradient-to-b from-gray-900/80 to-gray-900/0 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <h1 className="text-2xl font-bold text-white">Lume Studios</h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <Link href="/overview" className="hover:text-white transition-colors">
            Overview
          </Link>
          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        {status === "authenticated" && session?.user ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                {session.user?.name?.[0]?.toUpperCase() || "U"}
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Button
                    onClick={handleLogout}
                    disabled={isLoading}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    variant="ghost"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {isLoading ? "Logging out..." : "Logout"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
