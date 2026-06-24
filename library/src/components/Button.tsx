import * as React from "react";

export type ButtonVariant = "primary" | "outline" | "navy";

export interface ButtonProps {
  /** Visual style. `primary` = gold (use on dark or light); `outline` = ghost (dark backgrounds only); `navy` = solid navy (light backgrounds). */
  variant?: ButtonVariant;
  /** When set, renders an anchor `<a href>` instead of a `<button>`. */
  href?: string;
  /** Button label / contents. */
  children: React.ReactNode;
  /** Stretch to fill its container and center the label. */
  fullWidth?: boolean;
  /** Native button type when rendered as a `<button>`. */
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

/**
 * The brand call-to-action button. Renders an `<a>` when `href` is supplied,
 * otherwise a `<button>`. Gold `primary`, ghost `outline`, and solid `navy` variants.
 */
export function Button({
  variant = "primary",
  href,
  children,
  fullWidth,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  const cls = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");
  const style: React.CSSProperties | undefined = fullWidth
    ? { width: "100%", justifyContent: "center" }
    : undefined;
  if (href) {
    return (
      <a href={href} className={cls} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
