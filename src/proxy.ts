import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  hasLocale,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
} from "@/shared/i18n";

/**
 * Keeps the language out of the URL.
 *
 * Pages live under the internal `[lang]` segment (so each language is statically
 * rendered), but visitors only ever see clean paths: `/`, `/suppliers`, `/contact`.
 * The language comes from a cookie that the header toggle sets.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // An explicit /ar or /en URL: remember that choice and redirect to the clean path.
  const explicit = pathname.match(/^\/(ar|en)(\/.*)?$/);
  if (explicit) {
    const url = request.nextUrl.clone();
    url.pathname = explicit[2] ?? "/";
    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, explicit[1], {
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE,
    });
    return response;
  }

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = hasLocale(cookie) ? cookie : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  // The same URL now renders differently per cookie, so caches must not share it.
  response.headers.append("Vary", "Cookie");
  return response;
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension (images, icon…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
