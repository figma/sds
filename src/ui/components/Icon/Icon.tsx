import clsx from "clsx";
import css from "./Icon.module.css";

export type IconSize = "14" | "16" | "20" | "24" | "32" | "40" | "48";
export type IconProps = {
  children?: React.ReactNode;
  size?: IconSize;
};
export function Icon({ size = "16", children }: IconProps) {
  return (
    <svg
      className={clsx(css.icon, css[`size${size}`])}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
