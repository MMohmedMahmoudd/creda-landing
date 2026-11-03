import { Faq } from "@/shared/components/Faq";
import {
  HowSection,
  FeaturesSection,
  WhySection,
} from "@/shared/components/sections";
import { SignupCta } from "@/shared/components/SignupCta";
import { getSharedContent } from "@/shared/content";
import { links } from "@/shared/config/links";
import SiteHeader from "@/features/site-layout/SiteHeader";
import type { Locale } from "@/shared/i18n";
import CreditSection from "./components/CreditSection";
import Hero from "./components/Hero";
import PlatformStrip from "./components/PlatformStrip";
import { getSuppliersContent } from "./content";

export default function SuppliersPage({ lang }: { lang: Locale }) {
  const t = getSuppliersContent(lang);
  const c = getSharedContent(lang);

  return (
    <>
      <SiteHeader lang={lang} page="suppliers" />
      <main className="flex-1">
        <Hero t={t.hero} />
        <PlatformStrip t={t.strip} />
        <WhySection
          wide
          lang={lang}
          eyebrow={c.whyEyebrow}
          title={t.why.title}
          lead={t.why.lead}
          points={t.why.points}
          closing={t.why.closing}
        />
        <FeaturesSection
          wide
          lang={lang}
          eyebrow={c.featuresEyebrow}
          title={t.features.title}
          lead={t.features.lead}
          items={t.features.items}
          closing={t.features.closing}
          ctaHref={links.supplier}
          ctaLabel={c.registerSupplier}
        />
        <HowSection
          lang={lang}
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          steps={t.how.steps}
          stages={c.stages}
          pay={c.pay}
        />
        <CreditSection t={t.credit} />
        <Faq eyebrow={c.faqEyebrow} title={c.faqTitle} items={t.faq} />
        <SignupCta
          balance
          title={t.signup.title}
          text={t.signup.text}
          href={links.supplier}
          label={c.registerSupplier}
          tagline={c.tagline}
        />
      </main>
    </>
  );
}
