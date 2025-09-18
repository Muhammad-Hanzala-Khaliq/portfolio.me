import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isDashboardPage = req.nextUrl.pathname.startsWith("/admin/dashboard");
  const isCreatePage = req.nextUrl.pathname.startsWith("/admin/create");
  const isLoginPage = req.nextUrl.pathname.startsWith("/admin/login");

  const isLoggedIn = req.cookies.get("admin_auth")?.value === "true";

  // 🔒 Protect dashboard & create pages
  if ((isDashboardPage || isCreatePage) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // 🔒 If already logged in, prevent going back to login page
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
