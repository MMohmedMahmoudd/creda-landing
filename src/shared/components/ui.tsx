import Link from "next/link";
import type { ReactNode } from "react";
import { externalLinkProps } from "@/shared/config/links";

export function Eyebrow({
  children,
  light,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`text-[15px] font-bold ${light ? "text-sky-300" : "text-sky"}`}
    >
      {children}
    </div>
  );
}

export function H2({
  children,
  light,
  balance = true,
}: {
  children: ReactNode;
  light?: boolean;
  balance?: boolean;
}) {
  return (
    <h2
      className={`m-0 text-[clamp(28px,3.4vw,40px)] leading-[1.4] font-extrabold ${
        light ? "text-white" : "text-ink"
      } ${balance ? "text-balance" : ""}`}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  light,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`m-0 text-[18px] leading-[1.9] text-pretty ${light ? "text-on-navy" : "text-body"}`}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  light,
  maxWidth = "max-w-[780px]",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
  maxWidth?: string;
}) {
  return (
    <div className={`flex flex-col gap-3.5 ${maxWidth}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <H2 light={light}>{title}</H2>
      {lead && <Lead light={light}>{lead}</Lead>}
    </div>
  );
}

type Variant = "primary" | "outline" | "lime";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover hover:text-white",
  outline: "border border-line-strong bg-white text-ink hover:text-ink",
  lime: "bg-lime font-extrabold text-navy hover:bg-lime-hover hover:text-navy",
};

/** Button-styled link: client-side `Link` for internal paths, plain anchor otherwise. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const cls = `flex items-center justify-center rounded-[10px] font-bold transition-colors ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...externalLinkProps}>
      {children}
    </a>
  );
}

/** Points in the reading direction: left in RTL, right in LTR. */
export function Arrow({ stroke = "#7CC0FA" }: { stroke?: string }) {
  return (
    <svg
      className="ltr:rotate-180"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}
