"use client";

import { useEffect, useId, useRef, useState } from "react";

export type SelectOption = { value: string; label: string };

/** Accessible custom select (listbox) that follows the page direction. */
export default function Select({
  value,
  options,
  placeholder,
  onChange,
  className = "",
}: {
  value: string;
  options: SelectOption[];
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const listId = useId();
  const root = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const show = () => {
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  };

  const pick = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "Tab") return setOpen(false);
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key))
      e.preventDefault();
    if (!open) {
      if (e.key !== "Tab") show();
      return;
    }
    if (e.key === "ArrowDown")
      setActive((a) => Math.min(a + 1, options.length - 1));
    else if (e.key === "ArrowUp") setActive((a) => Math.max(a - 1, 0));
    else if ((e.key === "Enter" || e.key === " ") && active >= 0) pick(active);
  };

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKeyDown}
        className={`${className} flex cursor-pointer items-center justify-between gap-3 text-start ${
          selected ? "" : "text-faint"
        }`}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute inset-x-0 top-full z-20 mt-1.5 m-0 max-h-64 list-none overflow-auto rounded-[9px] border border-line-strong bg-white p-1.5 shadow-[0_8px_24px_rgba(16,24,40,.12)]"
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => pick(i)}
              className={`cursor-pointer rounded-[7px] px-3 py-2.5 text-[15px] ${
                i === active ? "bg-tint text-brand" : "text-ink"
              } ${o.value === value ? "font-bold" : ""}`}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
