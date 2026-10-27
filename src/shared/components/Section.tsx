import type { ReactNode } from "react";

/**
 * Standard content wrapper: 1200px max width, centred, 96px/24px padding,
 * vertical flex with a 48px gap (override with `gap` where the reference differs).
 */
export function SectionContainer({
  children,
  className = "",
  gap = "gap-12",
}: {
  children: ReactNode;
  className?: string;
  gap?: string;
}) {
  return (
    <div
      className={`mx-auto flex max-w-[1200px] flex-col px-6 py-24 ${gap} ${className}`}
    >
      {children}
    </div>
  );
}

/** `<section>` + standard container. `className` styles the section (background etc.). */
export function Section({
  id,
  className = "",
  gap,
  children,
}: {
  id?: string;
  className?: string;
  gap?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <SectionContainer gap={gap}>{children}</SectionContainer>
    </section>
  );
}

/** Centred 1200px wrapper with 24px side padding; vertical spacing is set per section. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 ${className}`}>{children}</div>
  );
}
