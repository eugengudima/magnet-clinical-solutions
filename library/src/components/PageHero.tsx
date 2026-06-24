import * as React from "react";

export interface PageHeroProps {
  /** Optional gold eyebrow label. */
  label?: React.ReactNode;
  /** Page title (`<h1>`). */
  title: React.ReactNode;
  /** Optional supporting subtitle. */
  subtitle?: React.ReactNode;
}

/**
 * Compact inner-page header on the navy gradient with a faint dot-grid overlay.
 * Centered eyebrow, `<h1>` title, and an optional subtitle — used at the top of
 * About / Services / Contact / Gallery pages.
 */
export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {label != null && <span className="section-label">{label}</span>}
        <h1>{title}</h1>
        {subtitle != null && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
