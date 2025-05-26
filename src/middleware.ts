import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTES } from "./constants/routes";
import { cookiesKeys } from "./utils/cookiesHelper";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define public paths that do not require authentication
  const publicPaths = [ROUTES.LOGIN, ROUTES.REGISTER];
  const isPublic = publicPaths.some((path) => pathname.startsWith(path));

  const token = request.cookies.get(cookiesKeys.ACCESS_TOKEN)?.value;

  // If the user is authenticated and trying to access a public route, redirect to home
  if (token && isPublic) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  // If the user is not authenticated, redirect to the login page
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // Apply middleware to all routes except static files and favicon
};
