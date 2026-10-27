import { Container } from "./Section";
import { Eyebrow, H2 } from "./ui";

export function Faq({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section id="faq" className="scroll-mt-20">
      <Container className="flex flex-wrap items-start gap-x-16 gap-y-10 py-24">
        <div className="flex flex-[1_1_260px] flex-col gap-3.5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2 balance={false}>{title}</H2>
        </div>
        <div className="flex min-w-0 flex-[2_1_520px] flex-col border-t border-line">
          {items.map((it) => (
            <details key={it.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center gap-4 py-[22px] text-[17.5px] font-bold text-ink">
                <span className="flex-1">{it.q}</span>
                <svg
                  className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0848C0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="m-0 mb-[22px] max-w-[680px] text-base leading-[1.9] text-body">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
