import * as React from "react";
import { CredentialItem } from "magnet-clinical-ui";

export const Grid = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: 520 }}>
    <CredentialItem
      title="GCP Certified Auditor"
      description="International certification in clinical study auditing."
    />
    <CredentialItem
      title="Ministry Accreditation"
      description="Courses recognized by Moldova's Ministry of Education."
    />
  </div>
);

export const Single = () => (
  <div style={{ maxWidth: 260 }}>
    <CredentialItem
      title="Pharmacovigilance Lead"
      description="Specialist training in drug-safety monitoring and reporting."
    />
  </div>
);
