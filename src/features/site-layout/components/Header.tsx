"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links } from "@/shared/config/links";
import type { Locale } from "@/shared/i18n";
import type { SiteContent } from "../content";
import LanguageSwitcher from "./LanguageSwitcher";

const pillLink =
  "flex items-center gap-1.5 whitespace-nowrap rounded-full border-[1.5px] border-sky-200 bg-tint font-bold text-brand hover:text-azure";
const navItem =
  "whitespace-nowrap text-[15.5px] font-semibold text-body hover:text-azure";

export default function Header({
  lang,
  t,
  logoAlt,
  registerSupplier,
  startBuying,
}: {
  lang: Locale;
  t: SiteContent["header"];
  logoAlt: string;
  registerSupplier: string;
  startBuying: string;
}) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  const isSup = pathname === "/suppliers";
  // On the contact page, in-page anchors point at the home page sections.
  const base = pathname === "/contact" ? "/" : "";
  const nav = (id: string) => `${base}#${id}`;

  const close = () => setMenu(false);
  const ctaHref = isSup ? links.supplier : links.buyer;
  const ctaLabel = isSup ? registerSupplier : startBuying;

  const switcher = (
    <LanguageSwitcher
      target={lang === "ar" ? "en" : "ar"}
      label={t.switchTo}
      ariaLabel={t.switchLabel}
      onSwitch={close}
    />
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center gap-7 px-6">
        <Link href="/" className="flex shrink-0 items-center" onClick={close}>
          <Image
            src="/images/Creda_Logo_v2.png"
            alt={logoAlt}
            width={494}
            height={158}
            priority
            className="block h-[46px] w-auto"
          />
        </Link>

        <nav className="hidden flex-1 items-center gap-[26px] nav:flex">
          <Link href={nav("how")} className={navItem}>
            {t.how}
          </Link>
          <Link href={nav("features")} className={navItem}>
            {t.features}
          </Link>
          <Link
            href={isSup ? "/" : "/suppliers"}
            className={`${pillLink} h-9 px-4 text-[14.5px]`}
          >
            {isSup ? t.forBuyers : t.areYouSupplier}
          </Link>
          <Link href={nav("faq")} className={navItem}>
            {t.faq}
          </Link>
          <Link href="/contact" className={navItem}>
            {t.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-2.5 nav:flex">
          {switcher}
          <a
            href={links.login}
            className="flex h-11 items-center rounded-[10px] border border-line-strong bg-white px-5 text-[15px] font-bold text-ink hover:text-ink"
          >
            {t.login}
          </a>
          <a
            href={ctaHref}
            className="flex h-11 items-center rounded-[10px] bg-brand px-[22px] text-[15px] font-bold text-white transition-colors hover:bg-brand-hover hover:text-white"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="flex-1 nav:hidden" />
        <button
          type="button"
          onClick={() => setMenu((m) => !m)}
          aria-label={t.menu}
          aria-expanded={menu}
          className="flex size-11 cursor-pointer items-center justify-center rounded-[10px] border border-line-strong bg-white nav:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#071B3D"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {menu && (
        <div className="flex flex-col gap-1 border-t border-line bg-white px-6 pt-3 pb-[22px] nav:hidden">
          {[
            [nav("how"), t.how],
            [nav("features"), t.features],
            [nav("faq"), t.faq],
            ["/contact", t.contact],
          ].map(([href, label]) => (
            <Link
              key={label}
              href={href}
              onClick={close}
              className="border-b border-[#f0f3f8] py-3 text-base font-semibold text-ink"
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3.5 pb-1.5">
            <Link
              href={isSup ? "/" : "/suppliers"}
              onClick={close}
              className={`${pillLink} inline-flex h-[38px] px-4 text-[15px]`}
            >
              {isSup ? t.forBuyers : t.areYouSupplier}
            </Link>
            <div className="ms-auto">{switcher}</div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2.5">
            <a
              href={links.login}
              className="flex h-12 items-center justify-center rounded-[10px] border border-line-strong text-[15.5px] font-bold text-ink"
            >
              {t.login}
            </a>
            <a
              href={ctaHref}
              className="flex h-12 items-center justify-center rounded-[10px] bg-brand text-[15.5px] font-bold text-white"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
