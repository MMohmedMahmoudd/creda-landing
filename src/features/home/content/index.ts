import type { Locale } from "@/shared/i18n";
import ar, { type HomeContent } from "./ar";
import en from "./en";

export type { HomeContent };
export const getHomeContent = (locale: Locale): HomeContent =>
  locale === "ar" ? ar : en;
