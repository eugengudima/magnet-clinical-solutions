import * as React from "react";
import { GalleryItem } from "magnet-clinical-ui";

export const Light = () => (
  <div style={{ width: 320 }}>
    <GalleryItem icon="🎓" label="Training Session" />
  </div>
);

export const Dark = () => (
  <div style={{ width: 320 }}>
    <GalleryItem icon="🏥" label="Clinical Research Facility" dark />
  </div>
);
