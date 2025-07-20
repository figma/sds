import { Description, FieldError, Label, SharedFieldProps } from "components";
import React, { ComponentProps } from "react";
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from "react-aria-components";
import css from "./Radio.module.css";

export interface RadioGroupProps
  extends Omit<RACRadioGroupProps, "children">,
    SharedFieldProps {
  children?: React.ReactNode;
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <RACRadioGroup className={css.group} {...props}>
      {label && <Label>{label}</Label>}
      {description && <Description>{description}</Description>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
      {children}
    </RACRadioGroup>
  );
}

export type RadioFieldProps = RACRadioProps & SharedFieldProps;
export function RadioField({
  children,
  label,
  description,
  errorMessage,
  ...props
}: RadioFieldProps) {
  const labelText: string | undefined =
    label || (typeof children === "string" ? children : undefined);
  return (
    <RACRadio className={css.field} {...props}>
      <>
        <Label>{labelText}</Label>
        <Radio />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        {labelText !== children && children}
      </>
    </RACRadio>
  );
}

export type RadioProps = ComponentProps<"div">;
export function Radio({ ...props }: RadioProps) {
  return (
    <div className={css.radio} {...props}>
      <span aria-hidden="true" className={css.check} />
    </div>
  );
}
