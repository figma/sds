import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./flex.css";

export type FlexContainerProps = ComponentPropsWithoutRef<"div">;
export function FlexContainer({ className, ...props }: FlexContainerProps) {
  const classNames = clsx(className, "flex-container");
  return <div className={classNames} {...props} />;
}

export type FlexProps = ComponentPropsWithoutRef<"div"> & {
  alignPrimary?: "start" | "end" | "center" | "stretch" | "space-between";
  alignSecondary?: "start" | "end" | "center" | "stretch" | "space-between";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "quarter" | "third" | "half" | "auto";
  container?: boolean;
  wrap?: boolean;
};
export function Flex({
  className,
  alignPrimary = "start",
  alignSecondary = "start",
  container = false,
  direction = "row",
  gap,
  type = "auto",
  wrap = false,
  ...props
}: FlexProps) {
  const classNames = clsx(
    className,
    "flex",
    container && "flex-container",
    `flex-align-primary-${alignPrimary}`,
    `flex-align-secondary-${alignSecondary}`,
    `flex-direction-${direction}`,
    `flex-type-${type}`,
    gap && `flex-gap-${gap}`,
    wrap && `flex-wrap`,
  );
  return (
    <div
      style={{
        "--flex-align-primary": alignPrimary,
        "--flex-align-secondary": alignSecondary,
        "--flex-direction": direction,
      }}
      className={classNames}
      {...props}
    />
  );
}

type FlextItemSize = "full" | "major" | "minor" | "half";
export type FlexItemProps = ComponentPropsWithoutRef<"div"> & {
  size?: FlextItemSize;
};
export function FlexItem({ children, size }: FlexItemProps) {
  const classNames = clsx("flex-item", size && `flex-item-size-${size}`);
  return <div className={classNames}>{children}</div>;
}
