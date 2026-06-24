import * as React from "react";
import { TeamCard } from "magnet-clinical-ui";

export const Founder = () => (
  <div style={{ width: 280 }}>
    <TeamCard
      avatar="👤"
      name="Founder & CEO"
      role="Clinical Auditor & CEO"
      bio="Internationally certified clinical study auditor leading Magnet Clinical Solutions."
    />
  </div>
);

export const Grid = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: 560 }}>
    <TeamCard name="Head of Education" role="Head of Education" bio="Designs the Ministry-accredited training curriculum." />
    <TeamCard name="Operations Lead" role="Clinical Operations" bio="Coordinates CRO study execution and patient recruitment." />
  </div>
);
