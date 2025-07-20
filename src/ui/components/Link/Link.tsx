import React from "react";
import css from "./Link.module.css";

export type LinkProps = { href: string } & React.ComponentPropsWithoutRef<"a">;
export const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return <a {...props} ref={ref} className={css.link} />;
});
