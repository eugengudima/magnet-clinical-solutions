import * as React from "react";

export interface ServiceDetailProps {
  /** Optional gold eyebrow, e.g. `"Direction 01"`. */
  label?: React.ReactNode;
  /** Large icon (emoji or node) shown in the navy visual panel. */
  icon: React.ReactNode;
  /** Service title. */
  title: React.ReactNode;
  /** Description paragraph(s). */
  description: React.ReactNode;
  /** Bulleted feature list (gold dots). */
  features?: string[];
  /** Optional action(s) below the list (typically a navy `Button`). */
  children?: React.ReactNode;
  /** Use the off-white background instead of white. */
  alt?: boolean;
  /** Place the visual panel on the right (content left). */
  reversed?: boolean;
}

/**
 * Alternating two-column service section: a large navy gradient visual panel on
 * one side, and an eyebrow + title + copy + gold-bulleted feature list + CTA on
 * the other. Toggle `reversed` to swap sides and `alt` for the off-white band.
 */
export function ServiceDetail({
  label,
  icon,
  title,
  description,
  features = [],
  children,
  alt,
  reversed,
}: ServiceDetailProps) {
  const cls = ["service-detail", alt ? "alt" : "", reversed ? "reversed" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={cls}>
      <div className="container">
        <div className="service-detail-inner">
          <div className="service-detail-visual">{icon}</div>
          <div className="service-detail-content">
            {label != null && <span className="section-label">{label}</span>}
            <h2>{title}</h2>
            <p>{description}</p>
            {features.length > 0 && (
              <ul className="service-features">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
