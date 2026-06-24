import * as React from "react";
import { SectionHeader } from "magnet-clinical-ui";

export const Full = () => (
  <SectionHeader
    label="What We Offer"
    title="Four Pillars of Clinical Excellence"
    description="From rigorous auditing to pioneering patient recruitment — we cover every dimension of clinical research."
  />
);

export const TitleOnly = () => (
  <SectionHeader label="Client Feedback" title="Trusted by Industry Professionals" />
);
