import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { AnchorOrButton, AnchorOrButtonProps } from "ui/utils/AnchorOrButton";
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

export type NavigationItemProps = AnchorOrButtonProps & {
  isSelected?: boolean;
};
export function NavigationItem({
  className,
  isSelected,
  ...props
}: NavigationItemProps) {
  const classNames = clsx(className, "navigation-item");
  return (
    <AnchorOrButton
      data-selected={isSelected || undefined}
      className={classNames}
      {...props}
    />
  );
}
