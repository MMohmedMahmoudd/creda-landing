import { notFound } from "next/navigation";
import HomePage from "@/features/home/HomePage";
import { hasLocale } from "@/shared/i18n";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <HomePage lang={lang} />;
}
