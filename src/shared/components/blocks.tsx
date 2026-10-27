import { num, type Locale } from "@/shared/i18n";
import { Arrow } from "./ui";

type Item = { title: string; text: string };

export function NumberedCards({
  items,
  lang,
}: {
  items: Item[];
  lang: Locale;
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
      {items.map((it, i) => (
        <div
          key={it.title}
          className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-7"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-tint text-[19px] font-extrabold text-brand">
            {num(lang, i + 1)}
          </div>
          <h3 className="m-0 mt-1.5 text-[19px] font-extrabold text-ink">
            {it.title}
          </h3>
          <p className="m-0 text-[15.5px] leading-[1.85] text-body">
            {it.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PainPoints({ items, lang }: { items: Item[]; lang: Locale }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8">
      {items.map((it, i) => (
        <div
          key={it.title}
          className="flex flex-col gap-2.5 border-t-2 border-ink pt-[22px]"
        >
          <span className="text-[15px] font-extrabold text-faint">
            {num(lang, i + 1)}
          </span>
          <h3 className="m-0 text-xl font-extrabold text-ink">{it.title}</h3>
          <p className="m-0 text-base leading-[1.85] text-body">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Steps({ items, lang }: { items: Item[]; lang: Locale }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-8">
      {items.map((it, i) => (
        <div key={it.title} className="flex flex-col gap-3">
          <div className="flex size-[52px] items-center justify-center rounded-full border-2 border-azure text-[21px] font-extrabold text-brand">
            {num(lang, i + 1)}
          </div>
          <h3 className="m-0 mt-2 text-[19.5px] font-extrabold text-ink">
            {it.title}
          </h3>
          <p className="m-0 text-[15.5px] leading-[1.85] text-body">
            {it.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function StageStrip({ stages, pay }: { stages: string[]; pay: string }) {
  const pill =
    "flex h-10 items-center rounded-full px-[18px] text-[15px] font-bold";
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-line bg-soft p-[22px]">
      {stages.map((s) => (
        <span key={s} className="contents">
          <span className={`${pill} border border-tint-line bg-white text-ink`}>
            {s}
          </span>
          <Arrow />
        </span>
      ))}
      <span className={`${pill} bg-brand text-white`}>{pay}</span>
    </div>
  );
}
