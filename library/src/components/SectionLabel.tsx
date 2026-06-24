import * as React from "react";

export interface SectionLabelProps {
  /** The label text (rendered uppercase, gold, letter-spaced). */
  children: React.ReactNode;
  /** Extra class names appended to `section-label`. */
  className?: string;
}

/**
 * Small uppercase gold eyebrow label that introduces a section heading.
 * Pair it above an `<h2>` inside a section header.
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={["section-label", className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
