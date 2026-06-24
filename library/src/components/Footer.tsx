import * as React from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Logo image URL (rendered white). */
  logoSrc?: string;
  /** Brand name / logo alt. */
  brand?: string;
  /** Brand blurb under the logo. */
  description?: React.ReactNode;
  /** Link columns (services, company, contact …). */
  columns: FooterColumn[];
  /** Copyright line, bottom-left. */
  copyright?: React.ReactNode;
  /** Tagline, bottom-right. */
  tagline?: React.ReactNode;
}

/**
 * Site footer on the darkest navy: brand column with logo + blurb, then several
 * link columns, and a divider rule above the copyright/tagline row.
 */
export function Footer({
  logoSrc,
  brand = "Magnet Clinical Solutions",
  description,
  columns,
  copyright,
  tagline,
}: FooterProps) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {logoSrc ? <img src={logoSrc} alt={brand} /> : <h4 style={{ color: "#fff" }}>{brand}</h4>}
            {description != null && <p>{description}</p>}
          </div>
          {columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{copyright}</span>
          <span>{tagline}</span>
        </div>
      </div>
    </footer>
  );
}
