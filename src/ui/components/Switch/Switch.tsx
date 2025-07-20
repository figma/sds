import { Description, FieldError, Label, SharedFieldProps } from "components";
import { ComponentProps } from "react";
import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from "react-aria-components";
import css from "./Switch.module.css";

export type SwitchGroupProps = ComponentProps<"div">;
export function SwitchGroup({ ...props }: SwitchGroupProps) {
  return <div {...props} className={css.group} />;
}

export type SwitchFieldProps = RACSwitchProps & SharedFieldProps;
export function SwitchField({
  children,
  label,
  description,
  errorMessage,
  ...props
}: SwitchFieldProps) {
  const labelText: string | undefined =
    label || (typeof children === "string" ? children : undefined);
  return (
    <RACSwitch className={css.field} {...props}>
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

export type SwitchProps = ComponentProps<"div">;
export function Switch({ ...props }: SwitchProps) {
  return (
    <div className={css.switch} {...props}>
      <span aria-hidden="true" className={css.icon} />
    </div>
  );
}
