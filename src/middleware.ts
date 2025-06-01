import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTES } from "./constants/routes";
import { cookiesKeys } from "./utils/cookiesHelper";
const locales = ["en", "vi"];
const defaultLocale = "vi";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1]; // Get the first segment of the path

  // Determine the active locale from the URL or use the default
  const urlLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  const activeLocale = urlLocale || defaultLocale;

  // Nếu không phải locale hợp lệ nhưng bắt đầu bằng 'vi' hoặc 'en' thì redirect về đúng locale
  // If the first segment looks like a locale but isn't valid, redirect to the closest valid locale
  if (
    firstSegment &&
    !locales.includes(firstSegment) &&
    locales.some((locale) => firstSegment.startsWith(locale))
  ) {
    const matchedLocale =
      locales.find((locale) => firstSegment.startsWith(locale)) ||
      defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${matchedLocale}`;
    return NextResponse.redirect(url);
  }

  // If no locale is present in the URL, redirect to the default locale with the original path
  if (!urlLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Define public paths that do not require authentication
  const publicPaths = [ROUTES.LOGIN, ROUTES.REGISTER].map(
    (route) => `/${activeLocale}${route}`
  );

  const isPublic = publicPaths.some((path) => pathname.startsWith(path));

  const token = request.cookies.get(cookiesKeys.ACCESS_TOKEN)?.value;

  // If the user is authenticated and trying to access a public route, redirect to home
  if (token && isPublic) {
    return NextResponse.redirect(
      new URL(`/${activeLocale}${ROUTES.HOME}`, request.url)
    );
  }

  // If the user is not authenticated, redirect to the login page
  if (!token && !isPublic) {
    return NextResponse.redirect(
      new URL(`/${activeLocale}${ROUTES.LOGIN}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // Apply middleware to all routes except static files and favicon
};
