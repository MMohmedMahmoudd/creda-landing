import { Container } from "@/shared/components/Section";
import { ButtonLink } from "@/shared/components/ui";
import { links } from "@/shared/config/links";
import type { SuppliersContent } from "../content";

const tones = {
  ok: { bar: "bg-azure", badge: "bg-[#ecfdf3] text-[#027a48]" },
  warn: { bar: "bg-[#f79009]", badge: "bg-[#fffaeb] text-[#b54708]" },
  info: { bar: "bg-azure", badge: "bg-[#eff8ff] text-[#1570ef]" },
} as const;

export default function Hero({ t }: { t: SuppliersContent["hero"] }) {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden bg-navy">
      <div className="absolute -top-[380px] left-1/2 size-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(32,168,252,.26),rgba(32,168,252,0)_68%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,192,250,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(124,192,250,.06)_1px,transparent_1px)] bg-[length:56px_56px]" />
      <Container className="relative flex flex-col items-center gap-[22px] pt-[84px] text-center">
        <div className="flex h-[34px] items-center gap-2 rounded-full border border-lime/35 bg-lime/8 px-4 text-[14.5px] font-bold text-lime">
          <span className="size-[7px] rounded-full bg-lime" />
          {t.badge}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(34px,5vw,62px)] leading-[1.35] font-extrabold text-balance text-white">
          {t.title}
        </h1>
        <p className="m-0 max-w-[760px] text-[18.5px] leading-[1.9] text-pretty text-on-navy">
          {t.lead}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3.5">
          <ButtonLink
            href={links.supplier}
            variant="lime"
            className="h-[54px] px-8 text-[17px]"
          >
            {t.cta}
          </ButtonLink>
          <a
            href="#how"
            className="flex h-[54px] items-center rounded-[10px] border-[1.5px] border-white/35 px-[26px] text-base font-bold text-white transition-colors hover:bg-white/8 hover:text-white"
          >
            {t.secondary}
          </a>
        </div>

        <div className="mt-11 box-border w-full rounded-t-[20px] border border-b-0 border-sky-300/25 bg-white/6 px-[22px] pt-[22px] pb-[26px] text-start">
          <div className="mb-4 flex items-center justify-between gap-3 px-1">
            <span className="text-[15px] font-extrabold text-white">
              {t.exposureTitle}
            </span>
            <span className="text-[13.5px] text-sky-200">{t.exposureSub}</span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-3.5">
            {t.rows.map((r) => {
              const tone = tones[r.tone as keyof typeof tones];
              return (
                <div
                  key={r.name}
                  className="flex flex-col gap-3.5 rounded-[14px] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-[10px] bg-tint text-[17px] font-extrabold text-brand">
                      {r.initial}
                    </div>
                    <span className="min-w-0 flex-1 text-[15.5px] font-bold text-ink">
                      {r.name}
                    </span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded-[5px] bg-[#eef2f7]">
                    <div
                      className={`rounded-[5px] ${tone.bar}`}
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span
                    className={`self-start rounded-[14px] px-3 py-1 text-xs font-bold ${tone.badge}`}
                  >
                    {r.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
