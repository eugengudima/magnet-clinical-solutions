import * as React from "react";

export interface CredentialItemProps {
  /** Credential heading. */
  title: React.ReactNode;
  /** Short supporting detail. */
  description: React.ReactNode;
}

/**
 * Compact credential card with a gold left border on the off-white surface —
 * used in a two-up `credentials-grid` to list certifications and accreditations.
 */
export function CredentialItem({ title, description }: CredentialItemProps) {
  return (
    <div className="credential-item">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
