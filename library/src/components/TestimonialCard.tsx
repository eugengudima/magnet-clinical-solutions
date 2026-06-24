import * as React from "react";

export interface TestimonialCardProps {
  /** The quote body (rendered italic). */
  quote: React.ReactNode;
  /** Author initials shown in the round navy avatar, e.g. `"RD"`. */
  authorInitials: string;
  /** Author name. */
  authorName: React.ReactNode;
  /** Author role / company. */
  authorRole: React.ReactNode;
}

/**
 * Client testimonial card: oversized gold quotation mark, the italic quote,
 * and an author row (initials avatar + name + role). Lifts on hover.
 */
export function TestimonialCard({ quote, authorInitials, authorName, authorRole }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">&ldquo;</div>
      <p className="testimonial-text">{quote}</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{authorInitials}</div>
        <div>
          <div className="testimonial-name">{authorName}</div>
          <div className="testimonial-role">{authorRole}</div>
        </div>
      </div>
    </div>
  );
}
