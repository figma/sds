import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { AnchorOrButton, AnchorOrButtonProps } from "utils";
import "./navigation.css";

export type NavigationProps = ComponentPropsWithoutRef<"nav"> & {
  direction?: "column" | "row";
};
export function Navigation({
  className,
  direction = "row",
  ...props
}: NavigationProps) {
  const classNames = clsx(
    className,
    "navigation",
    `navigation-direction-${direction}`,
  );
  return <nav className={classNames} {...props} />;
}

export type NavigationPillProps = AnchorOrButtonProps & {
  isSelected?: boolean;
};
export function NavigationPill({
  className,
  isSelected,
  ...props
}: NavigationPillProps) {
  const classNames = clsx(className, "navigation-pill");
  return (
    <AnchorOrButton
      data-selected={isSelected || undefined}
      className={classNames}
      {...props}
    />
  );
}

export type NavigationButtonProps = AnchorOrButtonProps & {
  isSelected?: boolean;
  icon?: ReactNode;
  size?: "small" | "medium";
  direction?: "column" | "row";
};
export function NavigationButton({
  children,
  className,
  isSelected,
  icon,
  direction = "column",
  size = "medium",
  ...props
}: NavigationButtonProps) {
  const classNames = clsx(
    className,
    "navigation-button",
    `navigation-button-direction-${direction}`,
    `navigation-button-size-${size}`,
  );
  return (
    <AnchorOrButton
      data-selected={isSelected || undefined}
      className={classNames}
      {...props}
    >
      {icon}
      {children}
    </AnchorOrButton>
  );
}
