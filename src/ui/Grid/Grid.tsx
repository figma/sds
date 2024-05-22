import clsx from "clsx";
import React from "react";
import "./grid.css";

type TShirtSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type GridAlign = "center" | "start" | "end";
type GridDirection = "row" | "column";
type GridGap = Exclude<TShirtSizes, "xxl">;
type GridPadding = TShirtSizes;

export interface GridProps {
  direction?: GridDirection;
  alignPrimary?: GridAlign;
  alignSecondary?: GridAlign;
  gap?: GridGap;
  padding?: GridPadding;
  paddingX?: GridPadding;
  paddingY?: GridPadding;
}
export function Grid({
  children,
  direction = "row",
  alignPrimary,
  alignSecondary,
  gap = "sm",
  padding,
  paddingX,
  paddingY,
}: GridProps & { children: React.ReactNode }) {
  const classNames = clsx(
    "grid",
    `grid-gap-${gap}`,
    `grid-direction-${direction}`,
    padding && `grid-padding-${padding}`,
    paddingX && `grid-padding-x-${paddingX}`,
    paddingY && `grid-padding-y-${paddingY}`,
    alignPrimary && `grid-align-primary-${alignPrimary}`,
    alignSecondary && `grid-align-secondary-${alignSecondary}`,
  );
  return <div className={classNames}>{children}</div>;
}

export type GridItemProps = React.ComponentPropsWithoutRef<"div">;
export function GridItem({ children }: GridItemProps) {
  const classNames = clsx("grid-item");
  return <div className={classNames}>{children}</div>;
}

export type GridCenterProps = React.ComponentPropsWithoutRef<"div">;
export function GridCenter({ children }: GridCenterProps) {
  const classNames = clsx("grid-center");
  return <div className={classNames}>{children}</div>;
}
