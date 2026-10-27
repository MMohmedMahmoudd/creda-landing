import { Container } from "@/shared/components/Section";
import { ButtonLink } from "@/shared/components/ui";
import { links } from "@/shared/config/links";
import type { HomeContent } from "../content";

export default function Hero({
  t,
  stages,
}: {
  t: HomeContent["hero"];
  stages: string[];
}) {
  return (
    <section id="top" className="scroll-mt-20 border-b border-line bg-soft">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-14 pt-[72px] pb-20">
        <div className="flex flex-col gap-[22px]">
          <div className="text-[15px] font-bold text-sky">{t.eyebrow}</div>
          <h1 className="m-0 text-[clamp(34px,4.6vw,56px)] leading-[1.4] font-extrabold text-balance text-ink">
            {t.title}
          </h1>
          <p className="m-0 max-w-[580px] text-[18.5px] leading-[1.9] text-pretty text-body">
            {t.lead}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-6">
            <ButtonLink
              href={links.buyer}
              className="h-[54px] px-[30px] text-[17px]"
            >
              {t.cta}
            </ButtonLink>
            <a
              href="#how"
              className="border-b-[1.5px] border-sky-200 pb-0.5 text-base font-bold text-brand hover:text-azure"
            >
              {t.secondary}
            </a>
          </div>
          <div className="text-[14.5px] text-muted">{t.trust}</div>
        </div>

        <OrderPreview t={t} stages={stages} />
      </Container>
    </section>
  );
}

function OrderPreview({
  t,
  stages,
}: {
  t: HomeContent["hero"];
  stages: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-navy p-8">
      <div className="absolute -top-[160px] -left-[120px] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(32,168,252,.35),rgba(32,168,252,0)_70%)]" />
      <div className="relative flex flex-col gap-4">
        <div className="rounded-2xl bg-white p-[22px] shadow-[0_12px_32px_rgba(0,0,0,.25)]">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-[10px] bg-tint text-[17px] font-extrabold text-brand">
              {t.card.initial}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[15.5px] font-bold text-ink">
                {t.card.supplier}
              </div>
              <div className="text-[13px] text-muted">{t.card.order}</div>
            </div>
            <span className="rounded-[14px] bg-[#eff8ff] px-3 py-1 text-xs font-bold text-[#1570ef]">
              {t.card.badge}
            </span>
          </div>
          <div className="mt-[22px] grid grid-cols-4 gap-1.5">
            {stages.map((s, i) => (
              <div key={s} className="flex flex-col gap-2">
                <div
                  className={`h-[5px] rounded-[3px] ${
                    i < 2
                      ? "bg-azure"
                      : i === 2
                        ? "bg-linear-to-l from-azure from-50% to-tint-line to-50% ltr:bg-linear-to-r"
                        : "bg-line"
                  }`}
                />
                <span
                  className={`text-[12.5px] ${
                    i < 2
                      ? "font-semibold text-body"
                      : i === 2
                        ? "font-extrabold text-ink"
                        : "font-semibold text-faint"
                  }`}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-2.5 border-t border-[#eef2f7] pt-3.5">
            {t.card.items.map((it) => (
              <div
                key={it.name}
                className="flex justify-between text-sm text-body"
              >
                <span>{it.name}</span>
                <span className="text-muted">{it.qty}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-sky-300/25 bg-navy-2 px-[22px] py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-white">
              {t.card.limitTitle}
            </span>
            <span className="text-[13px] text-sky-200">{t.card.supplier}</span>
          </div>
          <div className="mt-3.5 flex h-2.5 overflow-hidden rounded-md bg-white/12">
            <div className="w-[64%] rounded-md bg-lime" />
          </div>
          <div className="mt-2.5 flex justify-between text-[13px] text-sky-200">
            <span>{t.card.used}</span>
            <span className="font-bold text-lime">{t.card.available}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
