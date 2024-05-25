import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./layout.css";

type TShirtSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type LayoutAlign = "center" | "start" | "end" | "stretch";
type LayoutDirection = "row" | "column";
type LayoutType = "quarter" | "third";
type LayoutGap = Exclude<TShirtSizes, "xxl">;

export type LayoutProps = ComponentPropsWithoutRef<"div"> & {
  alignPrimary?: LayoutAlign;
  alignSecondary?: LayoutAlign;
  gap?: LayoutGap;
  type?: LayoutType;
  direction?: LayoutDirection;
};

export function Layout({
  children,
  className,
  alignPrimary,
  alignSecondary,
  gap,
  direction = "row",
  type = "quarter",
  ...props
}: LayoutProps) {
  const classNames = clsx(
    className,
    "layout",
    `layout-type-${type}`,
    `layout-direction-${direction}`,
    gap && `layout-gap-${gap}`,
    alignPrimary && `layout-align-primary-${alignPrimary}`,
    alignSecondary && `layout-align-secondary-${alignSecondary}`,
  );
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

type LayoutItemSize = "full" | "major" | "minor" | "half";
export type LayoutItemProps = ComponentPropsWithoutRef<"div"> & {
  size?: LayoutItemSize;
};
export function LayoutItem({ children, size }: LayoutItemProps) {
  const classNames = clsx("layout-item", size && `layout-item-size-${size}`);
  return <div className={classNames}>{children}</div>;
}

export type FlowProps = Omit<
  LayoutProps,
  "alignPrimary" | "alignSecondary" | "auto" | "type"
>;
export function Flow({ className, direction = "column", ...props }: FlowProps) {
  const classNames = clsx("layout-flow");
  return <Layout direction={direction} className={classNames} {...props} />;
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
