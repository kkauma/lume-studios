"use client";

import { SignUpForm } from "@/components/auth/signup-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Background gradient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="relative bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Create an account</h1>
            <p className="mt-2 text-gray-400">
              Get started with your free account
            </p>
          </div>

          <SignUpForm />

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
