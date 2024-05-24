import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./layout.css";

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

type SectionPadding = Omit<TShirtSizes, "xs" | "xxl" | "xl">;

export type SectionProps = ComponentPropsWithoutRef<
  "section" | "header" | "footer"
> & {
  elementType?: "section" | "header" | "footer";
  padding?: SectionPadding;
  variant?: "brand" | "secondary" | "stroke" | "subtle";
};
export function Section({
  className,
  elementType = "section",
  padding = "md",
  variant = "subtle",
  ...props
}: SectionProps) {
  const classNames = clsx(
    className,
    "section",
    `section-variant-${variant}`,
    `section-padding-${padding}`,
  );
  switch (elementType) {
    case "section":
      return <section className={classNames} {...props} />;
    case "header":
      return <header className={classNames} {...props} />;
    case "footer":
      return <footer className={classNames} {...props} />;
  }
}
