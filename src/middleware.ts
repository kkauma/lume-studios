import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Protected routes that require authentication
const protectedRoutes = ["/dashboard", "/settings", "/billing"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute) {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    // If no session or error, redirect to login with message
    if (!session?.user || error) {
      const redirectUrl = new URL("/login", req.url);
      // Add message as search param
      redirectUrl.searchParams.set(
        "message",
        "Please log in to access this page"
      );
      // Add the attempted URL as a redirect parameter
      redirectUrl.searchParams.set("redirectTo", req.nextUrl.pathname);

      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
