import * as React from "react";
import { FormField, FormFieldOption } from "./FormField";
import { Button } from "./Button";

export interface ContactFormProps {
  /** Options for the "service of interest" select. */
  serviceOptions?: FormFieldOption[];
  /** Submit button label. */
  submitLabel?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const DEFAULT_SERVICES: FormFieldOption[] = [
  { label: "Select a service…", value: "" },
  { label: "Clinical Study Auditing", value: "audit" },
  { label: "Training Platform", value: "training" },
  { label: "Contract Research Organization", value: "cro" },
  { label: "Patient Recruitment", value: "recruitment" },
];

/**
 * Ready-made enquiry form on a white card: first/last name row, email, company,
 * a service select, a message textarea, and a full-width primary submit. Drop it
 * into the right column of a contact layout.
 */
export function ContactForm({
  serviceOptions = DEFAULT_SERVICES,
  submitLabel = "Send Message",
  onSubmit,
}: ContactFormProps) {
  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <FormField label="First Name" name="first-name" placeholder="Ana" required />
          <FormField label="Last Name" name="last-name" placeholder="Popescu" required />
        </div>
        <FormField label="Email" name="email" type="email" placeholder="ana.popescu@company.com" required />
        <FormField label="Company" name="company" placeholder="Your company name" />
        <FormField label="Service of Interest" name="service" as="select" options={serviceOptions} />
        <FormField
          label="Message"
          name="message"
          as="textarea"
          placeholder="Tell us about your project, requirements, or questions…"
          required
        />
        <Button type="submit" variant="primary" fullWidth>
          {submitLabel}
        </Button>
      </form>
    </div>
  );
}
