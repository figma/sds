import { clsx } from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";
import { type AnchorOrButtonProps } from "utils";
import "./button.css";

export type ButtonProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "danger-primary" | "danger-subtle"
  >;
};
export const Button = React.forwardRef(function Button(
  { className, size = "medium", variant = "primary", ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  );

  const { style, ...sharedProps } = props;

  return isAnchorProps(props) ? (
    <RACLink
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {props.children}
    </RACLink>
  ) : (
    <RACButton
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {props.children}
    </RACButton>
  );
});

export type ButtonDangerProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "primary" | "subtle" | "neutral"
  >;
};
/**
 * Only used for destructive actions
 */
export const ButtonDanger = React.forwardRef(function Button(
  {
    className,
    size = "medium",
    variant = "danger-primary",
    ...props
  }: ButtonDangerProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  );

  const { style, ...sharedProps } = props;

  return isAnchorProps(props) ? (
    <RACLink
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {props.children}
    </RACLink>
  ) : (
    <RACButton
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {props.children}
    </RACButton>
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

function isAnchorProps(
  props: ButtonBaseProps | ButtonDangerProps,
): props is (ButtonBaseProps | ButtonDangerProps) &
  ComponentPropsWithoutRef<typeof RACLink> {
  return "href" in props;
}

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
