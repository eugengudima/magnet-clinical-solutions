import * as React from "react";
import { TestimonialCard } from "magnet-clinical-ui";

export const Default = () => (
  <TestimonialCard
    quote="The audit report delivered by Magnet Clinical Solutions was thorough, professionally structured, and met all our regulatory requirements without a single revision needed."
    authorInitials="RD"
    authorName="R. Dimitrescu"
    authorRole="Clinical Operations Director, Pharma Partner"
  />
);

export const Recruitment = () => (
  <TestimonialCard
    quote="Recruiting patients in Moldova seemed impossible until we partnered with Magnet. Their access to regional patient populations accelerated our trial timelines significantly."
    authorInitials="AC"
    authorName="A. Constantin"
    authorRole="Clinical Trial Sponsor, EU-based"
  />
);
