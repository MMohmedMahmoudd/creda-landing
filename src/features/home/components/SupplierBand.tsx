import Link from "next/link";
import { Container } from "@/shared/components/Section";
import { Arrow } from "@/shared/components/ui";
import type { HomeContent } from "../content";

export default function SupplierBand({
  t,
}: {
  t: HomeContent["supplierBand"];
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute -top-[260px] -left-[140px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(32,168,252,.28),rgba(32,168,252,0)_70%)]" />
      <Container className="relative flex flex-wrap items-center justify-between gap-x-12 gap-y-7 py-[72px]">
        <div className="flex max-w-[680px] flex-col gap-3">
          <h2 className="m-0 text-[clamp(26px,3vw,34px)] leading-[1.45] font-extrabold text-white">
            {t.title}
          </h2>
          <p className="m-0 text-[17.5px] leading-[1.9] text-pretty text-on-navy">
            {t.text}
          </p>
        </div>
        <Link
          href="/suppliers"
          className="flex h-[52px] items-center gap-2.5 rounded-[10px] border-[1.5px] border-white/40 px-[26px] text-[16.5px] font-bold text-white transition-colors hover:bg-white/8 hover:text-white"
        >
          {t.cta}
          <Arrow stroke="#34FC5C" />
        </Link>
      </Container>
    </section>
  );
}
