import * as React from "react";
import { PageHero } from "magnet-clinical-ui";

export const WithSubtitle = () => (
  <PageHero
    label="Our Story"
    title="Clinical Excellence, Rooted in Moldova"
    subtitle="Founded by an internationally certified clinical research professional with a mission to elevate pharmaceutical standards across the Republic of Moldova."
  />
);

export const TitleOnly = () => <PageHero label="What We Do" title="Our Services" />;
