"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/shared/i18n";
import {
  loadLegalDocument,
  type LegalBlock,
  type LegalDocument,
  type LegalDocumentKey,
} from "../content";

const linkClass =
  "cursor-pointer text-start text-[15px] text-on-navy hover:text-white";

/**
 * The footer's "Terms" and "Privacy" entries. Each opens the matching document in a modal
 * instead of navigating away; the content is fetched in the visitor's language on first open.
 */
export default function LegalLinks({
  lang,
  labels,
  closeLabel,
}: {
  lang: Locale;
  labels: Record<LegalDocumentKey, string>;
  closeLabel: string;
}) {
  const [active, setActive] = useState<LegalDocument | null>(null);

  const open = async (key: LegalDocumentKey) => {
    setActive(await loadLegalDocument(key, lang));
  };

  return (
    <>
      <button type="button" onClick={() => open("terms")} className={linkClass}>
        {labels.terms}
      </button>
      <button
        type="button"
        onClick={() => open("privacy")}
        className={linkClass}
      >
        {labels.privacy}
      </button>
      {active && (
        <LegalDialog
          doc={active}
          closeLabel={closeLabel}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

function LegalDialog({
  doc,
  closeLabel,
  onClose,
}: {
  doc: LegalDocument;
  closeLabel: string;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    // A modal <dialog> doesn't lock the page behind it, so do that here.
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, []);

  const scrollTo = (index: number) =>
    bodyRef.current
      ?.querySelector(`[data-section="${index}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // Only the backdrop is ever the click target: the dialog itself has no padding.
      onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      aria-labelledby="legal-dialog-title"
      className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-3xl flex-col overflow-hidden rounded-2xl bg-white p-0 text-ink shadow-[0_20px_25px_rgba(16,24,40,0.15)] backdrop:bg-black/40 open:flex"
    >
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 pt-6 pb-4">
        <h2 id="legal-dialog-title" className="text-xl font-extrabold">
          {doc.title}
        </h2>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={closeLabel}
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line text-muted hover:bg-soft"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        ref={bodyRef}
        className="flex flex-col gap-6 overflow-y-auto px-6 py-5"
      >
        <nav className="rounded-xl border border-line bg-soft p-5">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {doc.sections.map((section, i) => (
              <li key={section.title}>
                <button
                  type="button"
                  onClick={() => scrollTo(i)}
                  className="cursor-pointer text-start text-sm text-body hover:text-brand"
                >
                  {i + 1}. {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {doc.sections.map((section, i) => (
          <section
            key={section.title}
            data-section={i}
            className="flex scroll-mt-2 flex-col gap-3"
          >
            <h3 className="text-lg font-extrabold text-ink">
              {i + 1}. {section.title}
            </h3>
            {section.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </section>
        ))}
      </div>
    </dialog>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-sm leading-7 text-body">{block.text}</p>;
    case "subheading":
      return <h4 className="mt-2 text-base font-bold text-ink">{block.text}</h4>;
    case "list":
      return (
        <ul className="flex list-disc flex-col gap-2 ps-5 text-sm leading-7 text-body marker:text-faint">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full border-collapse text-start text-sm">
            {block.headers && (
              <thead className="bg-soft">
                <tr>
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-start align-top font-bold text-ink"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-line">
              {block.rows.map((row, r) => (
                <tr key={r} className="align-top">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={
                        c === 0
                          ? "px-4 py-3 leading-7 font-bold text-ink"
                          : "px-4 py-3 leading-7 text-body"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
