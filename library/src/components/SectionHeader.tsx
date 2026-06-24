import * as React from "react";

export interface SectionHeaderProps {
  /** Optional gold eyebrow label above the title. */
  label?: React.ReactNode;
  /** The section heading (rendered as `<h2>`). */
  title: React.ReactNode;
  /** Optional supporting paragraph below the title. */
  description?: React.ReactNode;
  className?: string;
}

/**
 * Centered section header: eyebrow label, `<h2>` title, and an optional
 * description. Sits above a grid of cards (services, testimonials, team).
 */
export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={["services-header", className].filter(Boolean).join(" ")}>
      {label != null && <span className="section-label">{label}</span>}
      <h2>{title}</h2>
      {description != null && <p>{description}</p>}
    </div>
  );
}
