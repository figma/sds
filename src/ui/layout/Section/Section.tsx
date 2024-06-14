import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./section.css";

export type SectionProps = ComponentPropsWithoutRef<
  "section" | "header" | "footer"
> & {
  elementType?: "section" | "header" | "footer";
  padding?: "800" | "1600" | "4000";
  paddingTop?: "800" | "1600" | "4000";
  paddingBottom?: "800" | "1600" | "4000";
  variant?: "brand" | "secondary" | "stroke" | "subtle";
};
export function Section({
  className,
  elementType = "section",
  padding = "1600",
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
