import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/components/Section";
import type { SiteContent } from "../content";

const item = "text-[15px] text-on-navy hover:text-white";
const head = "mb-1 text-[15px] font-extrabold text-white";

export default function Footer({
  t,
  logoAlt,
}: {
  t: SiteContent["footer"];
  logoAlt: string;
}) {
  return (
    <footer className="bg-navy text-on-navy">
      <Container className="flex flex-col gap-11 pt-16 pb-7">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-9">
          <div className="flex max-w-[420px] flex-col gap-4">
            <div className="self-start rounded-xl bg-white px-3.5 py-2.5">
              <Image
                src="/images/Creda_Logo_v2.png"
                alt={logoAlt}
                width={494}
                height={158}
                className="block h-11 w-auto"
              />
            </div>
            <p className="m-0 text-[15.5px] leading-[1.9] text-on-navy">
              {t.blurb}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className={head}>{t.platform}</div>
            <Link href="/" className={item}>
              {t.forBuyers}
            </Link>
            <Link href="/suppliers" className={item}>
              {t.forSuppliers}
            </Link>
            <Link href="/#how" className={item}>
              {t.how}
            </Link>
            <Link href="/#faq" className={item}>
              {t.faq}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className={head}>{t.company}</div>
            <a href="#" className={item}>
              {t.about}
            </a>
            <Link href="/contact" className={item}>
              {t.contact}
            </Link>
            <a href="#" className={item}>
              {t.terms}
            </a>
            <a href="#" className={item}>
              {t.privacy}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-on-navy/15 pt-[22px] text-sm text-[#9db0cc]">
          <span>{t.rights}</span>
          <span>{t.built}</span>
        </div>
      </Container>
    </footer>
  );
}
