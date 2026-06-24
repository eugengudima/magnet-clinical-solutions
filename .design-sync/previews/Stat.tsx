import * as React from "react";
import { Stat } from "magnet-clinical-ui";

const Dark: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: "var(--navy-dark)", padding: "2.5rem 3rem", borderRadius: 12 }}>
    {children}
  </div>
);

export const Single = () => (
  <Dark>
    <Stat number="100%" label="Certified Expertise" />
  </Dark>
);

export const Strip = () => (
  <Dark>
    <div style={{ display: "flex", gap: "3rem" }}>
      <Stat number="4+" label="Service Directions" />
      <Stat number="100%" label="Certified Expertise" />
      <Stat number="1" label="Country, Endless Potential" />
    </div>
  </Dark>
);
