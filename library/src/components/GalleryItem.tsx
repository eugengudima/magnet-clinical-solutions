import * as React from "react";

export interface GalleryItemProps {
  /** Icon (emoji or node) shown centered in the tile. */
  icon: React.ReactNode;
  /** Caption under the icon. */
  label: React.ReactNode;
  /** Use the dark navy gradient treatment instead of the light gray one. */
  dark?: boolean;
}

/**
 * Rounded gallery placeholder tile (4:3) with a centered icon and caption — the
 * stand-in shown before real photography is dropped in. Lay several out in a
 * `gallery-grid`.
 */
export function GalleryItem({ icon, label, dark }: GalleryItemProps) {
  const style: React.CSSProperties | undefined = dark
    ? { background: "linear-gradient(135deg, var(--navy), var(--navy-light))" }
    : undefined;
  const labelStyle: React.CSSProperties | undefined = dark
    ? { color: "rgba(255,255,255,0.5)" }
    : undefined;
  const iconStyle: React.CSSProperties | undefined = dark
    ? { color: "rgba(255,255,255,0.4)" }
    : undefined;
  return (
    <div className="gallery-item">
      <div className="gallery-placeholder" style={style}>
        <div className="icon" style={iconStyle}>
          {icon}
        </div>
        <div className="label" style={labelStyle}>
          {label}
        </div>
      </div>
    </div>
  );
}
