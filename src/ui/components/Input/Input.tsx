import { Description, FieldError, Label, SharedFieldProps } from "components";
import React from "react";
import {
  Input as RACInput,
  TextField as RACTextField,
  type InputProps as RACInputProps,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import css from "./Input.module.css";

export type InputFieldProps = SharedFieldProps & RACTextFieldProps;
export function InputField({
  placeholder,
  label,
  description,
  errorMessage,
  ...props
}: InputFieldProps) {
  return (
    <RACTextField className={css.field} {...props}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}

export type InputProps = RACInputProps;
export const Input = React.forwardRef(function Input(
  { ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return <RACInput className={css.input} ref={ref} {...props} />;
});
