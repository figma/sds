import { clsx } from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import {
  AnchorOrButton,
  type AnchorOrButtonProps,
} from "ui/utils/AnchorOrButton";
import "./button.css";

export type ButtonProps = Omit<ButtonBaseProps, "scheme">;
export const Button = React.forwardRef(function Button(
  { className, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  return (
    <ButtonBase {...props} scheme="default" className={className} ref={ref} />
  );
});

export type DestructiveButtonProps = Omit<ButtonBaseProps, "scheme">;
export const DestructiveButton = React.forwardRef(function Button(
  { className, variant = "default", ...props }: DestructiveButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  return (
    <ButtonBase
      {...props}
      variant={variant}
      scheme="danger"
      className={className}
      ref={ref}
    />
  );
});

type ButtonBaseProps = {
  type?: ComponentPropsWithoutRef<"button">["type"];
  scheme?: "default" | "danger";
  size?: "sm" | "md";
  variant?: "default" | "secondary" | "stroke" | "subtle";
} & AnchorOrButtonProps;

const ButtonBase = React.forwardRef(function Button(
  {
    className,
    size = "md",
    variant = "default",
    scheme = "default",
    ...props
  }: ButtonBaseProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-scheme-${scheme}`,
    `button-size-${size}`,
    `button-variant-${variant}`,
  );
  return <AnchorOrButton {...props} className={classNames} ref={ref} />;
});

export type ButtonGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  align?: "start" | "end" | "center" | "justify";
};
export const ButtonGroup = ({
  align = "start",
  className,
  ...props
}: ButtonGroupProps) => {
  const classNames = clsx(
    className,
    "button-group",
    `button-group-align-${align}`,
  );
  return <div className={classNames} {...props} />;
};
