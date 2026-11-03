import type { Locale } from "@/shared/i18n";

export type LegalDocumentKey = "terms" | "privacy";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers?: string[]; rows: string[][] };

export type LegalDocument = {
  title: string;
  sections: { title: string; blocks: LegalBlock[] }[];
};

// Loaded on demand: the documents are long and only needed once a footer link is opened.
const loaders: Record<
  LegalDocumentKey,
  Record<Locale, () => Promise<{ default: unknown }>>
> = {
  terms: {
    ar: () => import("./terms.ar.json"),
    en: () => import("./terms.en.json"),
  },
  privacy: {
    ar: () => import("./privacy.ar.json"),
    en: () => import("./privacy.en.json"),
  },
};

export async function loadLegalDocument(
  key: LegalDocumentKey,
  locale: Locale,
): Promise<LegalDocument> {
  return (await loaders[key][locale]()).default as LegalDocument;
}
