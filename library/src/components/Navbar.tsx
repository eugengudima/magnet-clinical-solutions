import * as React from "react";

export interface NavLink {
  label: string;
  href: string;
  /** Marks the current page (gold underline). */
  active?: boolean;
}

export interface NavbarProps {
  /** Logo image URL. Rendered white on the transparent bar, full-color when scrolled. */
  logoSrc?: string;
  /** Alt text / brand name for the logo. */
  brand?: string;
  /** Primary navigation links. */
  links: NavLink[];
  /** Call-to-action link shown as a gold pill at the end of the nav. */
  ctaLabel?: string;
  ctaHref?: string;
  /**
   * Solid/light treatment. The live site toggles this on scroll; inner pages
   * render it `true` from the start.
   */
  scrolled?: boolean;
}

/**
 * Fixed top navigation bar: logo, inline links with animated gold underline,
 * and a gold CTA pill. Transparent over the hero, solid-white when `scrolled`.
 */
export function Navbar({
  logoSrc,
  brand = "Magnet Clinical Solutions",
  links,
  ctaLabel,
  ctaHref = "#",
  scrolled,
}: NavbarProps) {
  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          {logoSrc ? (
            <img src={logoSrc} alt={brand} />
          ) : (
            <strong
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.15rem",
                letterSpacing: "0.01em",
                color: scrolled ? "var(--navy)" : "#fff",
              }}
            >
              {brand}
            </strong>
          )}
        </a>
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <a href={l.href} className={l.active ? "active" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
          {ctaLabel && (
            <li>
              <a href={ctaHref} className="navbar-cta">
                {ctaLabel}
              </a>
            </li>
          )}
        </ul>
        <button className="navbar-hamburger" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
