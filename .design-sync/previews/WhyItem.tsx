import * as React from "react";
import { WhyItem, FeatureList } from "magnet-clinical-ui";

export const List = () => (
  <FeatureList>
    <WhyItem
      icon="🎯"
      title="Precision Auditing"
      description="Every audit is conducted to international GCP standards, producing reports that satisfy regulatory bodies across jurisdictions."
    />
    <WhyItem
      icon="📋"
      title="Ministry-Accredited Training"
      description="Our courses carry official certification from the Republic of Moldova's Ministry of Education, giving participants recognized credentials."
    />
    <WhyItem
      icon="🌍"
      title="Untapped Patient Pools"
      description="Access diverse patient populations from across Moldova — north, south, and Gagauzia — for studies requiring varied demographics."
    />
  </FeatureList>
);
