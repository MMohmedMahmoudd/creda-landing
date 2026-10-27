import { getSharedContent } from "@/shared/content";
import type { Locale } from "@/shared/i18n";
import Header, { type SitePage } from "./components/Header";
import { getSiteContent } from "./content";

/** Header for a given page. Rendered by each page so the server HTML already has the right variant. */
export default function SiteHeader({
  lang,
  page,
}: {
  lang: Locale;
  page: SitePage;
}) {
  const site = getSiteContent(lang);
  const common = getSharedContent(lang);

  return (
    <Header
      lang={lang}
      page={page}
      t={site.header}
      logoAlt={common.logoAlt}
      registerSupplier={common.registerSupplier}
      startBuying={common.startBuying}
    />
  );
}
