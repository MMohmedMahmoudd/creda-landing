import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo } from "next/font/google";
import "../globals.css";
import Footer from "@/features/site-layout/components/Footer";
import Header from "@/features/site-layout/components/Header";
import { getSiteContent } from "@/features/site-layout/content";
import { getSharedContent } from "@/shared/content";
import { getDir, hasLocale, locales } from "@/shared/i18n";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// `[lang]` is internal: src/proxy.ts rewrites clean URLs to it based on the language cookie.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getSiteContent(lang);
  return { title: meta.title, description: meta.description };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const site = getSiteContent(lang);
  const common = getSharedContent(lang);

  return (
    <html lang={lang} dir={getDir(lang)} className={`${cairo.variable} h-full`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink">
        <Header
          lang={lang}
          t={site.header}
          logoAlt={common.logoAlt}
          registerSupplier={common.registerSupplier}
          startBuying={common.startBuying}
        />
        <div className="flex-1">{children}</div>
        <Footer t={site.footer} logoAlt={common.logoAlt} />
      </body>
    </html>
  );
}
