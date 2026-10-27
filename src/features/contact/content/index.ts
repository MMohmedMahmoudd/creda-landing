import type { Locale } from "@/shared/i18n";
import ar, { type ContactContent } from "./ar";
import en from "./en";

export type { ContactContent };
export const getContactContent = (locale: Locale): ContactContent =>
  locale === "ar" ? ar : en;
