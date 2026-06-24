import * as React from "react";
import { AboutPill } from "magnet-clinical-ui";

const Dark: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
      padding: "2rem",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      maxWidth: 460,
    }}
  >
    {children}
  </div>
);

export const Stack = () => (
  <Dark>
    <AboutPill
      icon="🏅"
      title="International Certification"
      description="Certified auditor in clinical studies with global recognition"
    />
    <AboutPill
      icon="📚"
      title="Ministry-Accredited Courses"
      description="Official certifications recognized in the Republic of Moldova"
    />
  </Dark>
);

export const Single = () => (
  <Dark>
    <AboutPill
      icon="🤝"
      title="B2B Partnerships"
      description="Serving pharmaceutical companies, sponsors, and research institutions"
    />
  </Dark>
);
