import * as React from "react";

export interface ServiceCardProps {
  /** Icon (emoji or node) shown in the navy gradient tile. */
  icon: React.ReactNode;
  /** Card title. */
  title: React.ReactNode;
  /** Short description. */
  description: React.ReactNode;
  /** Optional link text, e.g. `"Learn More →"`. */
  linkText?: React.ReactNode;
  /** Href for the link. */
  href?: string;
}

/**
 * Service offering card: gradient icon tile, title, description, and an
 * optional gold "Learn More" tag. Lifts and reveals a navy→gold top bar on
 * hover. Lay several out in a `services-grid`.
 */
export function ServiceCard({ icon, title, description, linkText, href = "#" }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {linkText != null && (
        <a href={href} className="service-tag">
          {linkText}
        </a>
      )}
    </div>
  );
}
