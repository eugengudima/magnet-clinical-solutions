import * as React from "react";
import { ServiceDetail, Button } from "magnet-clinical-ui";

export const Audit = () => (
  <ServiceDetail
    label="Direction 01"
    icon="🔍"
    title="Clinical Study Auditing"
    description="Internationally certified audit services for clinical studies, delivered under contract with a comprehensive audit report that satisfies regulatory bodies across jurisdictions."
    features={[
      "GCP-compliant audit methodology",
      "Comprehensive written audit report",
      "Regulatory-ready documentation",
      "Delivered under formal contract",
    ]}
  >
    <Button variant="navy" href="#contact">
      Request an Audit
    </Button>
  </ServiceDetail>
);

export const RecruitmentReversed = () => (
  <ServiceDetail
    label="Direction 04"
    icon="👥"
    title="Patient Recruitment Platform"
    description="Connecting pharmaceutical sponsors with Moldova's diverse and largely untapped patient populations for clinical trials."
    features={["Access across north, south & Gagauzia", "Diverse demographics", "Faster trial timelines"]}
    reversed
    alt
  >
    <Button variant="navy" href="#contact">
      Inquire About Recruitment
    </Button>
  </ServiceDetail>
);
