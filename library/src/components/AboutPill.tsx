import * as React from "react";

export interface AboutPillProps {
  /** Leading icon (emoji or node). */
  icon: React.ReactNode;
  /** Bold heading line. */
  title: React.ReactNode;
  /** Supporting line. */
  description: React.ReactNode;
}

/**
 * Translucent credential pill — icon beside a bold title and a line of detail.
 * Styled for dark backgrounds (the navy "about strip"); stack several
 * vertically.
 */
export function AboutPill({ icon, title, description }: AboutPillProps) {
  return (
    <div className="about-pill">
      <span className="about-pill-icon">{icon}</span>
      <div className="about-pill-text">
        <strong>{title}</strong>
        {description}
      </div>
    </div>
  );
}
