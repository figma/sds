import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./grid.css";

type TShirtSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type GridAlign = "center" | "start" | "end" | "stretch";
type GridDirection = "row" | "column";
type GridType = "quarter" | "third";
type GridGap = Exclude<TShirtSizes, "xxl">;

export type GridProps = ComponentPropsWithoutRef<"div"> & {
  alignPrimary?: GridAlign;
  alignSecondary?: GridAlign;
  gap?: GridGap;
  type?: GridType;
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
  type = "quarter",
  ...props
}: GridProps) {
  const classNames = clsx(
    "grid",
    gap && `grid-gap-${gap}`,
    `grid-type-${type}`,
    props.auto && "grid-auto",
    props.auto && `grid-direction-${props.direction || "row"}`,
    alignPrimary && `grid-align-primary-${alignPrimary}`,
    alignSecondary && `grid-align-secondary-${alignSecondary}`,
  );
  return <div className={classNames}>{children}</div>;
}

type GridItemSize = "full" | "major" | "minor" | "half";
export type GridItemProps = ComponentPropsWithoutRef<"div"> & {
  size?: GridItemSize;
};
export function GridItem({ children, size }: GridItemProps) {
  const classNames = clsx("grid-item", size && `grid-item-size-${size}`);
  return <div className={classNames}>{children}</div>;
}

export type FlowProps = Omit<
  GridProps,
  "alignPrimiary" | "alignSecondary" | "auto" | "direction" | "type"
>;
export function Flow({ ...props }: FlowProps) {
  return <Grid direction="column" auto {...props} />;
}
