import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { AnchorOrButton, AnchorOrButtonProps } from "utils";
import css from "./Navigation.module.css";

export type NavigationProps = ComponentPropsWithoutRef<"nav"> & {
  direction?: "column" | "row";
};
export function Navigation({ direction = "row", ...props }: NavigationProps) {
  const classNames = clsx(css.navigation, css[direction]);
  return <nav className={classNames} {...props} />;
}

export type NavigationPillProps = AnchorOrButtonProps & {
  isSelected?: boolean;
};
export function NavigationPill({ isSelected, ...props }: NavigationPillProps) {
  return <AnchorOrButton data-selected={isSelected || undefined} {...props} />;
}

export type NavigationButtonProps = AnchorOrButtonProps & {
  isSelected?: boolean;
  icon?: ReactNode;
  size?: "small" | "medium";
  direction?: "column" | "row";
};
export function NavigationButton({
  children,
  isSelected,
  icon,
  direction = "column",
  size = "medium",
  ...props
}: NavigationButtonProps) {
  return (
    <AnchorOrButton data-selected={isSelected || undefined} {...props}>
      {icon}
      {children}
    </AnchorOrButton>
  );
}
