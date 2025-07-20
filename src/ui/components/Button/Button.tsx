import { clsx } from "clsx";
import React, { ComponentProps } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";
import { type AnchorOrButtonProps } from "utils";
import css from "./Button.module.css";

export type ButtonProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "dangerPrimary" | "dangerSubtle"
  >;
};
export function Button({
  size = "medium",
  variant = "primary",
  ...props
}: Omit<ButtonProps, "className">) {
  const classNames = clsx(css.button, css[size], css[variant]);

  const { style, ...sharedProps } = props;

  return isAnchorProps(props) ? (
    <RACLink {...sharedProps} className={classNames}>
      {props.children}
    </RACLink>
  ) : (
    <RACButton {...sharedProps} className={classNames}>
      {props.children}
    </RACButton>
  );
}

export type ButtonDangerProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "primary" | "subtle" | "neutral"
  >;
};
/**
 * Only used for destructive actions
 */
export function ButtonDanger({
  size = "medium",
  variant = "dangerPrimary",
  ...props
}: ButtonDangerProps) {
  const classNames = clsx(css.button, css[size], css[variant]);

  const { style, ...sharedProps } = props;

  return isAnchorProps(props) ? (
    <RACLink {...sharedProps} className={classNames}>
      {props.children}
    </RACLink>
  ) : (
    <RACButton {...sharedProps} className={classNames}>
      {props.children}
    </RACButton>
  );
}

type ButtonBaseProps = {
  type?: ComponentProps<"button">["type"];
  size?: "small" | "medium";
  variant?: "primary" | "neutral" | "subtle" | "dangerPrimary" | "dangerSubtle";
} & AnchorOrButtonProps;

function isAnchorProps(
  props: ButtonBaseProps | ButtonDangerProps,
): props is (ButtonBaseProps | ButtonDangerProps) &
  ComponentProps<typeof RACLink> {
  return "href" in props;
}

export type ButtonGroupProps = React.ComponentProps<"div"> & {
  align?: "start" | "end" | "center" | "justify" | "stack";
};
export const ButtonGroup = ({
  align = "start",
  ...props
}: ButtonGroupProps) => {
  const classNames = clsx(
    css.group,
    css[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
  );
  return <div className={classNames} {...props} />;
};
