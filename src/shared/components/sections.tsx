import type { Locale } from "@/shared/i18n";
import { NumberedCards, PainPoints, StageStrip, Steps } from "./blocks";
import { Section } from "./Section";
import { ButtonLink, Eyebrow, H2, SectionHead } from "./ui";

type Item = { title: string; text: string };

/** "Why Creda" — three pain points and a closing line. */
export function WhySection({
  lang,
  eyebrow,
  title,
  lead,
  points,
  closing,
  wide,
}: {
  lang: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  points: Item[];
  closing: string;
  wide?: boolean;
}) {
  return (
    <Section id="why">
      <SectionHead
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        maxWidth={wide ? "max-w-[820px]" : "max-w-[780px]"}
      />
      <PainPoints items={points} lang={lang} />
      <p className="m-0 mt-2 text-center text-[clamp(20px,2.2vw,24px)] font-extrabold text-brand">
        {closing}
      </p>
    </Section>
  );
}

/** Six numbered feature cards, a closing statement and a call to action. */
export function FeaturesSection({
  lang,
  eyebrow,
  title,
  lead,
  items,
  closing,
  ctaHref,
  ctaLabel,
  wide,
}: {
  lang: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  items: Item[];
  closing: string;
  ctaHref: string;
  ctaLabel: string;
  wide?: boolean;
}) {
  return (
    <Section id="features" className="bg-soft">
      <SectionHead
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        maxWidth={wide ? "max-w-[820px]" : "max-w-[780px]"}
      />
      <NumberedCards items={items} lang={lang} />
      <div className="flex flex-col items-center gap-[22px] text-center">
        <p
          className={`m-0 text-[18px] leading-[1.9] font-semibold text-pretty text-ink ${
            wide ? "max-w-[780px]" : "max-w-[760px]"
          }`}
        >
          {closing}
        </p>
        <ButtonLink href={ctaHref} className="h-[52px] px-[30px] text-[16.5px]">
          {ctaLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}

/** Four numbered steps plus the order-stage strip. */
export function HowSection({
  lang,
  eyebrow,
  title,
  steps,
  stages,
  pay,
}: {
  lang: Locale;
  eyebrow: string;
  title: string;
  steps: Item[];
  stages: string[];
  pay: string;
}) {
  return (
    <Section id="how" gap="gap-[52px]">
      <div className="flex flex-col gap-3.5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <H2>{title}</H2>
      </div>
      <Steps items={steps} lang={lang} />
      <StageStrip stages={stages} pay={pay} />
    </Section>
  );
}
