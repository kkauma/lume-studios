"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Don't show navbar on auth pages
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return null;
  }

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
          <Link href="/roadmap" className="hover:text-white transition-colors">
            Roadmap
          </Link>
          <Link href="/faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        {session ? (
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/signup"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started →
          </Link>
        )}
      </div>
    </nav>
  );
}
