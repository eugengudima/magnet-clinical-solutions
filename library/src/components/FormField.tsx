import * as React from "react";

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormFieldProps {
  /** Field label. */
  label: React.ReactNode;
  /** Control kind. Defaults to a single-line `input`. */
  as?: "input" | "textarea" | "select";
  /** Input type when `as="input"` (text, email, tel …). */
  type?: string;
  /** Field name / id. */
  name?: string;
  /** Placeholder text (input/textarea). */
  placeholder?: string;
  /** Options when `as="select"`. */
  options?: FormFieldOption[];
  required?: boolean;
}

/**
 * Labeled form control (`form-group`) — input, textarea, or select — with the
 * brand focus ring. Compose several inside `ContactForm` or a custom form.
 */
export function FormField({
  label,
  as = "input",
  type = "text",
  name,
  placeholder,
  options = [],
  required,
}: FormFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {as === "textarea" ? (
        <textarea id={name} name={name} placeholder={placeholder} required={required} />
      ) : as === "select" ? (
        <select id={name} name={name} required={required} defaultValue="">
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} required={required} />
      )}
    </div>
  );
}
