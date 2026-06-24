import * as React from "react";

export interface CtaSectionProps {
  /** Optional gold eyebrow label. */
  label?: React.ReactNode;
  /** Heading. */
  title: React.ReactNode;
  /** Supporting paragraph. */
  description?: React.ReactNode;
  /** Action(s) — typically a single primary `Button`. */
  children?: React.ReactNode;
}

/**
 * Full-width closing call-to-action band on the navy gradient: centered label,
 * heading, paragraph, and an action button.
 */
export function CtaSection({ label, title, description, children }: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        {label != null && (
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {label}
          </span>
        )}
        <h2>{title}</h2>
        {description != null && <p>{description}</p>}
        {children}
      </div>
    </section>
  );
}
