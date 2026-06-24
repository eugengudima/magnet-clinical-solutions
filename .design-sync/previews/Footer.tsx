import * as React from "react";
import { Footer } from "magnet-clinical-ui";

export const Default = () => (
  <Footer
    brand="Magnet Clinical Solutions"
    description="Advancing clinical research standards in the Republic of Moldova through expertise, certification, and innovation."
    columns={[
      {
        title: "Services",
        links: [
          { label: "Clinical Auditing", href: "#audit" },
          { label: "Training Platform", href: "#training" },
          { label: "CRO Services", href: "#cro" },
          { label: "Patient Recruitment", href: "#recruitment" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          { label: "Gallery", href: "#gallery" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "info@magnetclinical.md", href: "mailto:info@magnetclinical.md" },
          { label: "Republic of Moldova", href: "#" },
        ],
      },
    ]}
    copyright="© 2026 Magnet Clinical Solutions. All rights reserved."
    tagline="Built with precision."
  />
);
