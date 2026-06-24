import * as React from "react";

export interface WhyItemProps {
  /** Icon (emoji or node) in the rounded gray tile. */
  icon: React.ReactNode;
  /** Item heading. */
  title: React.ReactNode;
  /** Supporting copy. */
  description: React.ReactNode;
}

/**
 * A single "why us" feature row: square icon tile beside a heading and
 * paragraph. Renders an `<li>` — wrap a set of these in `FeatureList`.
 */
export function WhyItem({ icon, title, description }: WhyItemProps) {
  return (
    <li className="why-item">
      <div className="why-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}

export interface FeatureListProps {
  /** A set of `WhyItem` rows. */
  children: React.ReactNode;
}

/**
 * Vertical list wrapper for `WhyItem` feature rows (`<ul class="why-list">`).
 */
export function FeatureList({ children }: FeatureListProps) {
  return <ul className="why-list">{children}</ul>;
}
