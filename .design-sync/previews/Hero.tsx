import * as React from "react";
import { Hero, Button } from "magnet-clinical-ui";

export const Landing = () => (
  <Hero
    badge="Republic of Moldova · Clinical Research"
    badgeIcon="🏥"
    title="Advancing Clinical Research in"
    highlight="Moldova"
    subtitle="Magnet Clinical Solutions provides world-class auditing, certified training, contract research, and patient recruitment services to the pharmaceutical industry."
    actions={
      <>
        <Button variant="primary" href="#services">
          Explore Our Services
        </Button>
        <Button variant="outline" href="#contact">
          Get in Touch
        </Button>
      </>
    }
    stats={[
      { number: "4+", label: "Service Directions" },
      { number: "100%", label: "Certified Expertise" },
      { number: "1", label: "Country, Endless Potential" },
    ]}
  />
);
