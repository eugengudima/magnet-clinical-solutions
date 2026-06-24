import * as React from "react";
import { Navbar } from "magnet-clinical-ui";

const LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
];

export const OverHero = () => (
  <div style={{ position: "relative", height: 90, background: "var(--navy)" }}>
    <Navbar brand="Magnet Clinical Solutions" links={LINKS} ctaLabel="Contact Us" />
  </div>
);

export const Scrolled = () => (
  <div style={{ position: "relative", height: 90, background: "var(--off-white)" }}>
    <Navbar brand="Magnet Clinical Solutions" links={LINKS} ctaLabel="Contact Us" scrolled />
  </div>
);
