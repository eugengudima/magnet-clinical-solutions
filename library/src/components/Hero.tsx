import * as React from "react";
import { Stat, StatProps } from "./Stat";

export interface HeroProps {
  /** Optional pill badge text above the title. */
  badge?: React.ReactNode;
  /** Optional leading icon for the badge. */
  badgeIcon?: React.ReactNode;
  /** Main headline. */
  title: React.ReactNode;
  /** Optional trailing phrase rendered in gold inside the headline. */
  highlight?: React.ReactNode;
  /** Supporting paragraph under the headline. */
  subtitle?: React.ReactNode;
  /** Call-to-action buttons (compose `Button` here). */
  actions?: React.ReactNode;
  /** Optional figures shown in the bottom-right stat strip. */
  stats?: StatProps[];
}

/**
 * Full-viewport landing hero on the navy gradient with a subtle dot-grid and
 * radial glow. Holds a badge, headline (with optional gold `highlight`),
 * subtitle, CTA buttons, and an optional corner strip of `Stat`s.
 */
export function Hero({ badge, badgeIcon, title, highlight, subtitle, actions, stats }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-grid-overlay" />
      <div className="container">
        <div className="hero-content">
          {badge != null && (
            <div className="hero-badge">
              {badgeIcon != null && <span>{badgeIcon}</span>}
              {badge}
            </div>
          )}
          <h1>
            {title}
            {highlight != null && <> <span>{highlight}</span></>}
          </h1>
          {subtitle != null && <p className="hero-subtitle">{subtitle}</p>}
          {actions != null && <div className="hero-actions">{actions}</div>}
        </div>
      </div>
      {stats && stats.length > 0 && (
        <div className="hero-stats container">
          <div className="hero-stats-inner">
            {stats.map((s, i) => (
              <Stat key={i} number={s.number} label={s.label} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
