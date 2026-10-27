import Link from "next/link";
import { Container } from "@/shared/components/Section";
import { externalLinkProps, links } from "@/shared/config/links";
import SiteHeader from "@/features/site-layout/SiteHeader";
import type { Locale } from "@/shared/i18n";
import ContactForm from "./components/ContactForm";
import { getContactContent } from "./content";

const linkCls =
  "border-b-[1.5px] border-sky-200 pb-0.5 text-[15.5px] font-bold text-brand hover:text-azure";

export default function ContactPage({ lang }: { lang: Locale }) {
  const t = getContactContent(lang);

  return (
    <>
      <SiteHeader lang={lang} page="contact" />
      <main className="flex-1">
        <section id="top" className="scroll-mt-20 border-b border-line bg-soft">
          <Container className="flex flex-col gap-3.5 pt-16 pb-14">
            <div className="text-[15px] font-bold text-sky">{t.eyebrow}</div>
            <h1 className="m-0 text-[clamp(32px,4.2vw,50px)] leading-[1.4] font-extrabold text-balance text-ink">
              {t.title}
            </h1>
            <p className="m-0 max-w-[640px] text-[18px] leading-[1.9] text-pretty text-body">
              {t.lead}
            </p>
          </Container>
        </section>

        <section>
          <Container className="flex flex-wrap items-start gap-10 pt-14 pb-24">
            <div className="min-w-0 flex-[2_1_560px] rounded-[18px] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(16,24,40,.05)]">
              <ContactForm t={t} />
            </div>

            <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
              <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-soft p-6">
                <h3 className="m-0 text-lg font-extrabold text-ink">
                  {t.aside.account.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.85] text-body">
                  {t.aside.account.text}
                </p>
                <a
                  href={links.login}
                  {...externalLinkProps}
                  className={`${linkCls} mt-1 self-start`}
                >
                  {t.aside.account.link}
                </a>
              </div>
              <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-soft p-6">
                <h3 className="m-0 text-lg font-extrabold text-ink">
                  {t.aside.faq.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.85] text-body">
                  {t.aside.faq.text}
                </p>
                <div className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
                  <Link href="/#faq" className={linkCls}>
                    {t.aside.faq.buyers}
                  </Link>
                  <Link href="/suppliers#faq" className={linkCls}>
                    {t.aside.faq.suppliers}
                  </Link>
                </div>
              </div>
            </aside>
          </Container>
        </section>
      </main>
    </>
  );
}
