import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Explicitly allow access to signup route
export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // Allow direct access to signup
  if (pathname === "/signup") {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
