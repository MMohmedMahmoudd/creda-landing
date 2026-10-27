import { notFound } from "next/navigation";
import ContactPage from "@/features/contact/ContactPage";
import { hasLocale } from "@/shared/i18n";

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ContactPage lang={lang} />;
}
