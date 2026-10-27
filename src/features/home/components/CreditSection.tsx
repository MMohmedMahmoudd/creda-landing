import Image from "next/image";
import { Section } from "@/shared/components/Section";
import { Eyebrow, H2, Lead } from "@/shared/components/ui";
import type { HomeContent } from "../content";

export default function CreditSection({ t }: { t: HomeContent["credit"] }) {
  return (
    <Section id="credit" className="bg-tint" gap="gap-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-12">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <H2>{t.title}</H2>
          <Lead>{t.lead}</Lead>
          <p className="m-0 mt-[18px] text-[19px] leading-[1.8] font-extrabold text-pretty text-brand">
            {t.highlight}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-4">
          {t.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-tint-line bg-white p-6"
            >
              <h3 className="m-0 text-lg font-extrabold text-ink">
                {card.title}
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.85] text-body">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <figure className="m-0 flex flex-col gap-4">
        <div className="relative pb-14">
          <div className="overflow-hidden rounded-2xl border border-[#c9dff7] bg-white shadow-[0_24px_60px_rgba(7,27,61,.14)]">
            <div
              dir="ltr"
              className="flex h-[38px] items-center gap-[7px] border-b border-line bg-soft px-4"
            >
              <span className="size-2.5 rounded-full bg-line-strong" />
              <span className="size-2.5 rounded-full bg-line-strong" />
              <span className="size-2.5 rounded-full bg-line-strong" />
            </div>
            <Image
              src="/images/credit-overview.png"
              alt={t.overviewAlt}
              width={2772}
              height={1290}
              sizes="(min-width: 1248px) 1152px, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <Image
            src="/images/credit-breakdown.png"
            alt={t.breakdownAlt}
            width={1310}
            height={500}
            sizes="(min-width: 1200px) 500px, 46vw"
            className="absolute -left-3 bottom-0 h-auto w-[min(46%,500px)] rounded-[14px] shadow-[0_20px_48px_rgba(7,27,61,.22)]"
          />
        </div>
        <figcaption className="text-[14.5px] text-muted">
          {t.caption}
        </figcaption>
      </figure>
    </Section>
  );
}
