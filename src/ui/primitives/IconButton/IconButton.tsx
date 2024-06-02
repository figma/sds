import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";
import {
  Button,
  DestructiveButton,
  DestructiveButtonProps,
  type ButtonProps,
} from "ui/primitives/Button/Button";
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
  DestructiveButtonProps,
  "aria-label"
> & {
  "aria-label": string;
};
export const DestructiveIconButton = forwardRef(function IconButton(
  props: DestructiveIconButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  return <DestructiveButton {...props} {...ref} className="icon-button" />;
});
