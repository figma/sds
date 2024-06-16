import { clsx } from "clsx";
import { Description, FieldError, Label, SharedFieldProps } from "primitives";
import type React from "react";
import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from "react-aria-components";
import "./switch.css";

export type SwitchGroupProps = React.ComponentPropsWithoutRef<"div">;
export function SwitchGroup({ className, ...props }: SwitchGroupProps) {
  const classNames = clsx(className, "switch-group");
  return <div {...props} className={classNames} />;
}

export type SwitchFieldProps = RACSwitchProps & SharedFieldProps;
export function SwitchField({
  children,
  className,
  label,
  description,
  errorMessage,
  ...props
}: SwitchFieldProps) {
  const classNames = clsx(className, "switch-field");
  const labelText: string | undefined =
    label || (typeof children === "string" ? children : undefined);
  return (
    <RACSwitch className={classNames} {...props}>
      <>
        <Label>{labelText}</Label>
        <Switch />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        {labelText !== children && children}
      </>
    </RACSwitch>
  );
}

export type SwitchProps = React.ComponentPropsWithoutRef<"div">;
export function Switch({ className, ...props }: SwitchProps) {
  const classNames = clsx(className, "switch");
  return (
    <div className={classNames} {...props}>
      <span aria-hidden="true" className="switch-icon" />
    </div>
  );
}
