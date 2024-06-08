import { clsx } from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import {
  AnchorOrButton,
  type AnchorOrButtonProps,
} from "ui/utils/AnchorOrButton";
import "./button.css";

export type ButtonProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "danger-primary" | "danger-subtle"
  >;
};
export const Button = React.forwardRef(function Button(
  { className, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  return <ButtonBase {...props} className={className} ref={ref} />;
});

export type DestructiveButtonProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "primary" | "subtle" | "neutral"
  >;
};
export const DestructiveButton = React.forwardRef(function Button(
  { className, variant = "danger-primary", ...props }: DestructiveButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  return (
    <ButtonBase {...props} variant={variant} className={className} ref={ref} />
  );
});

type ButtonBaseProps = {
  type?: ComponentPropsWithoutRef<"button">["type"];
  size?: "small" | "medium";
  variant?:
    | "primary"
    | "neutral"
    | "subtle"
    | "danger-primary"
    | "danger-subtle";
} & AnchorOrButtonProps;

const ButtonBase = React.forwardRef(function Button(
  { className, size = "medium", variant, ...props }: ButtonBaseProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  );
  return <AnchorOrButton {...props} className={classNames} ref={ref} />;
});

export type ButtonGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  align?: "start" | "end" | "center" | "justify" | "stack";
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
