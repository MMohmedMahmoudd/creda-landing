import type { Locale } from "@/shared/i18n";
import ar, { type SharedContent } from "./ar";
import en from "./en";

export type { SharedContent };
export const getSharedContent = (locale: Locale): SharedContent =>
  locale === "ar" ? ar : en;
