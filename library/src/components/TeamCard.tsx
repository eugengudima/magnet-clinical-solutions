import * as React from "react";

export interface TeamCardProps {
  /** Avatar content — initials, an emoji, or a node — in the round navy disc. */
  avatar?: React.ReactNode;
  /** Person's name. */
  name: React.ReactNode;
  /** Role / title (rendered in gold). */
  role: React.ReactNode;
  /** Optional short bio. */
  bio?: React.ReactNode;
}

/**
 * Centered team member card: round navy avatar disc, name, gold role line, and
 * an optional bio. Lifts on hover. Lay several out in a `team-grid`.
 */
export function TeamCard({ avatar = "👤", name, role, bio }: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-avatar">{avatar}</div>
      <h3>{name}</h3>
      <div className="role">{role}</div>
      {bio != null && <p>{bio}</p>}
    </div>
  );
}
