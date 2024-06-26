import clsx from "clsx";
import React from "react";
import "./link.css";

export type LinkProps = { href: string } & React.ComponentPropsWithoutRef<"a">;
export const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const classNames = clsx("link", props.className);
  return <a {...props} ref={ref} className={classNames} />;
});
