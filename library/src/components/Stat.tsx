import * as React from "react";

export interface StatProps {
  /** The headline figure, e.g. `"4+"`, `"100%"`. */
  number: React.ReactNode;
  /** Caption under the figure. */
  label: React.ReactNode;
}

/**
 * A single headline statistic: large Playfair number over a small uppercase
 * caption. Light text — intended for the dark hero stat strip.
 */
export function Stat({ number, label }: StatProps) {
  return (
    <div className="stat">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
