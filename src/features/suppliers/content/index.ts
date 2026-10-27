import type { Locale } from "@/shared/i18n";
import ar, { type SuppliersContent } from "./ar";
import en from "./en";

export type { SuppliersContent };
export const getSuppliersContent = (locale: Locale): SuppliersContent =>
  locale === "ar" ? ar : en;
