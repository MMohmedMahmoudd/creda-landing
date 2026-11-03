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
import SupplierBand from "./components/SupplierBand";
import { getHomeContent } from "./content";

export default function HomePage({ lang }: { lang: Locale }) {
  const t = getHomeContent(lang);
  const c = getSharedContent(lang);

  return (
    <>
      <SiteHeader lang={lang} page="home" />
      <main className="flex-1">
        <Hero t={t.hero} stages={c.stages} />
        <PlatformStrip t={t.strip} />
        <WhySection
          lang={lang}
          eyebrow={c.whyEyebrow}
          title={t.why.title}
          lead={t.why.lead}
          points={t.why.points}
          closing={t.why.closing}
        />
        <FeaturesSection
          lang={lang}
          eyebrow={c.featuresEyebrow}
          title={t.features.title}
          lead={t.features.lead}
          items={t.features.items}
          closing={t.features.closing}
          ctaHref={links.buyer}
          ctaLabel={c.startBuying}
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
        <SupplierBand t={t.supplierBand} />
        <SignupCta
          title={t.signup.title}
          text={t.signup.text}
          href={links.buyer}
          label={c.startBuying}
          tagline={c.tagline}
        />
      </main>
    </>
  );
}
