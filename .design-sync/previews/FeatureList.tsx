import * as React from "react";
import { FeatureList, WhyItem } from "magnet-clinical-ui";

export const TwoItems = () => (
  <FeatureList>
    <WhyItem
      icon="🏅"
      title="International Certification"
      description="Certified auditor in clinical studies with global recognition."
    />
    <WhyItem
      icon="🤝"
      title="B2B Partnerships"
      description="Serving pharmaceutical companies, sponsors, and research institutions."
    />
  </FeatureList>
);
