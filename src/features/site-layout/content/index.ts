import type { Locale } from "@/shared/i18n";
import ar, { type SiteContent } from "./ar";
import en from "./en";

export type { SiteContent };
export const getSiteContent = (locale: Locale): SiteContent =>
  locale === "ar" ? ar : en;
