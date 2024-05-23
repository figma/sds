import clsx from "clsx";
import React from "react";
import "./grid.css";

type TShirtSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type GridAlign = "center" | "start" | "end" | "stretch";
type GridDirection = "row" | "column";
type GridGap = Exclude<TShirtSizes, "xxl">;

export type GridProps = {
  alignPrimary?: GridAlign;
  alignSecondary?: GridAlign;
  gap?: GridGap;
} & (
  | {
      auto?: never;
    }
  | {
      auto: true;
      direction?: GridDirection;
    }
);

export function Grid({
  children,
  alignPrimary,
  alignSecondary,
  gap,
  ...props
}: GridProps & { children: React.ReactNode }) {
  const classNames = clsx(
    "grid",
    gap && `grid-gap-${gap}`,
    props.auto && "grid-auto",
    props.auto && `grid-direction-${props.direction || "row"}`,
    alignPrimary && `grid-align-primary-${alignPrimary}`,
    alignSecondary && `grid-align-secondary-${alignSecondary}`,
  );
  return <div className={classNames}>{children}</div>;
}

type GridItemSize = "full" | "major" | "minor" | "half";
export type GridItemProps = React.ComponentPropsWithoutRef<"div"> & {
  size?: GridItemSize;
};
export function GridItem({ children, size }: GridItemProps) {
  const classNames = clsx("grid-item", size && `grid-item-size-${size}`);
  return <div className={classNames}>{children}</div>;
}
