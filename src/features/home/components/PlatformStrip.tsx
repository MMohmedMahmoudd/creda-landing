import { Container } from "@/shared/components/Section";
import type { HomeContent } from "../content";

export default function PlatformStrip({ t }: { t: HomeContent["strip"] }) {
  return (
    <section className="border-b border-line">
      <Container className="flex flex-wrap items-center gap-x-7 gap-y-2.5 py-[22px]">
        <span className="text-[15px] font-bold text-muted">{t.label}</span>
        <div className="flex flex-wrap gap-x-[26px] gap-y-2">
          {t.items.map((s) => (
            <span key={s} className="text-[16.5px] font-bold text-ink">
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
