import { Button } from "components";
import { IconArrowLeft, IconArrowRight } from "icons";
import React, { ComponentProps } from "react";
import css from "./Pagination.module.css";

export type PaginationProps = ComponentProps<"nav">;

export function Pagination({
  "aria-label": ariaLabel = "Page navigation",
  ...props
}: PaginationProps) {
  return <nav aria-label={ariaLabel} {...props} className={css.root} />;
}

export function PaginationPrevious({
  href = null,
  children = "Previous",
  label = "Previous page",
}: {
  href?: string | null;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <Button
      {...(href === null ? { disabled: true } : { href })}
      variant="subtle"
      aria-label={label}
    >
      <IconArrowLeft />
      {children}
    </Button>
  );
}

export function PaginationNext({
  href = null,
  children = "Next",
  label = "Next page",
}: {
  href?: string | null;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <Button
      {...(href === null ? { disabled: true } : { href })}
      variant="subtle"
      aria-label={label}
    >
      {children}
      <IconArrowRight />
    </Button>
  );
}

export function PaginationPage({
  href,
  children,
  current = false,
  label = (page) => `Page ${page}`,
}: {
  href: string;
  children: string;
  current?: boolean;
  label?: (page: string) => string;
}) {
  return (
    <Button
      href={href}
      aria-label={label(children)}
      aria-current={current ? "page" : undefined}
      variant={current ? "primary" : "subtle"}
    >
      <span className="">{children}</span>
    </Button>
  );
}

export function PaginationGap() {
  return (
    <div aria-hidden="true" className="">
      &hellip;
    </div>
  );
}
