import * as React from "react";

export interface BadgeProps {
  /** Optional leading icon (emoji or node), shown before the text. */
  icon?: React.ReactNode;
  /** Badge text. */
  children: React.ReactNode;
  className?: string;
}

/**
 * Pill badge with a gold-on-translucent treatment, used at the top of the hero
 * to flag context (e.g. country + sector). Designed for dark backgrounds.
 */
export function Badge({ icon, children, className }: BadgeProps) {
  return (
    <div className={["hero-badge", className].filter(Boolean).join(" ")}>
      {icon != null && <span>{icon}</span>}
      {children}
    </div>
  );
}
