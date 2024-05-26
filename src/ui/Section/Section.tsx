import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./section.css";

export type SectionProps = ComponentPropsWithoutRef<
  "section" | "header" | "footer"
> & {
  elementType?: "section" | "header" | "footer";
  padding?: "sm" | "md" | "lg";
  paddingTop?: "sm" | "md" | "lg";
  paddingBottom?: "sm" | "md" | "lg";
  variant?: "brand" | "secondary" | "stroke" | "subtle";
};
export function Section({
  className,
  elementType = "section",
  padding = "md",
  paddingBottom,
  paddingTop,
  variant = "subtle",
  ...props
}: SectionProps) {
  const classNames = clsx(
    className,
    "section",
    `section-variant-${variant}`,
    `section-padding-top-${paddingTop || padding}`,
    `section-padding-bottom-${paddingBottom || padding}`,
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
