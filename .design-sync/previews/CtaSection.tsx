import * as React from "react";
import { CtaSection, Button } from "magnet-clinical-ui";

export const Default = () => (
  <CtaSection
    label="Ready to Begin?"
    title="Partner with Magnet Clinical Solutions"
    description="Whether you need an audit, specialized training, a CRO, or patient recruitment — we're ready to support your clinical research goals."
  >
    <Button variant="primary" href="#contact">
      Start a Conversation
    </Button>
  </CtaSection>
);
