import { notFound } from "next/navigation";
import SuppliersPage from "@/features/suppliers/SuppliersPage";
import { hasLocale } from "@/shared/i18n";

export default async function Page({ params }: PageProps<"/[lang]/suppliers">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SuppliersPage lang={lang} />;
}
