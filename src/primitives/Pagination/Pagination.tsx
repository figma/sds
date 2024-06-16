import clsx from "clsx";
import { useMediaQuery } from "hooks";
import { IconArrowLeft, IconArrowRight } from "icons";
import { Button } from "primitives";
import type React from "react";
import "./pagination.css";

export type PaginationProps = React.ComponentPropsWithoutRef<"nav">;
export function Pagination({
  "aria-label": ariaLabel = "Page navigation",
  className,
  ...props
}: PaginationProps) {
  const classNames = clsx("pagination");
  return <nav aria-label={ariaLabel} {...props} className={classNames} />;
}

export function PaginationPrevious({
  href = null,
  children = "Previous",
}: {
  href?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Button
      {...(href === null ? { disabled: true } : { href })}
      variant="subtle"
      aria-label="Previous page"
    >
      <IconArrowLeft />
      {children}
    </Button>
  );
}

export function PaginationNext({
  href = null,
  children = "Next",
}: {
  href?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Button
      {...(href === null ? { disabled: true } : { href })}
      variant="subtle"
      aria-label="Next page"
    >
      {children}
      <IconArrowRight />
    </Button>
  );
}

export function PaginationList({ children }: { children: React.ReactNode }) {
  const { isTabletUp } = useMediaQuery();
  return isTabletUp && <span className="pagination-list">{children}</span>;
}

export function PaginationPage({
  href,
  children,
  current = false,
}: {
  href: string;
  children: string;
  current?: boolean;
}) {
  return (
    <Button
      href={href}
      aria-label={`Page ${children}`}
      aria-current={current ? "page" : undefined}
      variant={current ? "primary" : "subtle"}
      className={clsx()}
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
