import * as React from "react";
import { Button } from "magnet-clinical-ui";

export const Primary = () => <Button variant="primary">Explore Our Services</Button>;

export const Navy = () => <Button variant="navy">Request an Audit</Button>;

export const Outline = () => (
  <div style={{ background: "var(--navy)", padding: "2rem", borderRadius: 12 }}>
    <Button variant="outline">Get in Touch</Button>
  </div>
);

export const AsLink = () => (
  <Button variant="primary" href="#services">
    Start a Conversation
  </Button>
);

export const FullWidth = () => (
  <div style={{ width: 320 }}>
    <Button variant="primary" fullWidth>
      Send Message
    </Button>
  </div>
);
