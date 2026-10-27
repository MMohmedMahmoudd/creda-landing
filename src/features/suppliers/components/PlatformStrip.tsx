import { Container } from "@/shared/components/Section";
import type { SuppliersContent } from "../content";

export default function PlatformStrip({ t }: { t: SuppliersContent["strip"] }) {
  return (
    <section className="border-t border-sky-300/20 bg-navy-2">
      <Container className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2.5 py-5">
        <span className="me-1.5 text-[15px] font-bold text-sky-200">
          {t.label}
        </span>
        {t.items.map((s) => (
          <span
            key={s}
            className="flex h-9 items-center rounded-full border border-sky-300/30 bg-white/4 px-4 text-[15px] font-bold text-white"
          >
            {s}
          </span>
        ))}
      </Container>
    </section>
  );
}
