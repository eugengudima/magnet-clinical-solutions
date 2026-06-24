import * as React from "react";
import { Badge } from "magnet-clinical-ui";

export const Default = () => (
  <div style={{ background: "var(--navy-dark)", padding: "2rem", borderRadius: 12 }}>
    <Badge icon="🏥">Republic of Moldova · Clinical Research</Badge>
  </div>
);

export const TextOnly = () => (
  <div style={{ background: "var(--navy-dark)", padding: "2rem", borderRadius: 12 }}>
    <Badge>Internationally Certified</Badge>
  </div>
);
