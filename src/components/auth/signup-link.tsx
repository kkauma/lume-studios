"use client";

import { useRouter } from "next/navigation";

export function SignupLink() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/signup")}
      className="text-blue-400 hover:text-blue-300 font-medium"
    >
      Sign up
    </button>
  );
}
