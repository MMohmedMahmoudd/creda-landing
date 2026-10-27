import { SectionContainer } from "@/shared/components/Section";
import { SectionHead } from "@/shared/components/ui";
import type { SuppliersContent } from "../content";

export default function CreditSection({
  t,
}: {
  t: SuppliersContent["credit"];
}) {
  return (
    <section
      id="credit"
      className="relative scroll-mt-20 overflow-hidden bg-navy"
    >
      <div className="absolute -top-[300px] -right-[200px] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(32,168,252,.24),rgba(32,168,252,0)_70%)]" />
      <SectionContainer className="relative">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} light />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {t.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 rounded-2xl border border-sky-300/22 bg-white/5 p-7"
            >
              <div className="h-1 w-7 rounded-sm bg-lime" />
              <h3 className="m-0 mt-1.5 text-xl font-extrabold text-white">
                {card.title}
              </h3>
              <p className="m-0 text-base leading-[1.85] text-on-navy">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
