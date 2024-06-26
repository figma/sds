import clsx from "clsx";
import {
  Button,
  ButtonDanger,
  ButtonDangerProps,
  type ButtonProps,
} from "primitives";
import { ForwardedRef, forwardRef } from "react";
import "./iconButton.css";

export type IconButtonProps = Omit<ButtonProps, "aria-label"> & {
  "aria-label": string;
};
export const IconButton = forwardRef(function IconButton(
  { className, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(className, "icon-button");
  return <Button {...props} {...ref} className={classNames} />;
});

export type DestructiveIconButtonProps = Omit<
  ButtonDangerProps,
  "aria-label"
> & {
  "aria-label": string;
};
export const DestructiveIconButton = forwardRef(function IconButton(
  props: DestructiveIconButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  return <ButtonDanger {...props} {...ref} className="icon-button" />;
});
