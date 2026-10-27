export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

/** Cookie that remembers the visitor's language; the proxy reads it to pick the locale. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const hasLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

export const getDir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/** Localised numeral: Arabic-Indic for `ar`, Latin for `en`. */
export const num = (locale: Locale, n: number) =>
  n.toLocaleString(locale === "ar" ? "ar-EG" : "en");
