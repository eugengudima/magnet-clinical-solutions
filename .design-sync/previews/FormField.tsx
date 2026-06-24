import * as React from "react";
import { FormField } from "magnet-clinical-ui";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: "#fff", padding: "2rem", borderRadius: 12, width: 360, boxShadow: "var(--shadow)" }}>
    {children}
  </div>
);

export const TextInput = () => (
  <Card>
    <FormField label="First Name" name="first-name" placeholder="Ana" required />
  </Card>
);

export const Select = () => (
  <Card>
    <FormField
      label="Service of Interest"
      name="service"
      as="select"
      options={[
        { label: "Select a service…", value: "" },
        { label: "Clinical Study Auditing", value: "audit" },
        { label: "Training Platform", value: "training" },
        { label: "Patient Recruitment", value: "recruitment" },
      ]}
    />
  </Card>
);

export const Textarea = () => (
  <Card>
    <FormField
      label="Message"
      name="message"
      as="textarea"
      placeholder="Tell us about your project, requirements, or questions…"
      required
    />
  </Card>
);
