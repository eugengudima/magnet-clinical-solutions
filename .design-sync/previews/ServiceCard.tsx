import * as React from "react";
import { ServiceCard } from "magnet-clinical-ui";

export const Auditing = () => (
  <ServiceCard
    icon="🔍"
    title="Clinical Study Auditing"
    description="Internationally certified audit services for clinical studies, delivered under contract with a comprehensive audit report."
    linkText="Learn More →"
    href="#audit"
  />
);

export const Training = () => (
  <ServiceCard
    icon="🎓"
    title="Training Platform"
    description="Ministry of Education certified courses across five domains: clinical studies, doctor authorization, pharmacovigilance, and more."
    linkText="Learn More →"
    href="#training"
  />
);

export const WithoutLink = () => (
  <ServiceCard
    icon="🏢"
    title="Contract Research Organization"
    description="Full-service CRO bringing international clinical studies to Moldova — from authorization to protocol execution."
  />
);
