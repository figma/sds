import { clsx } from "clsx";
import { Description, FieldError, Label, SharedFieldProps } from "primitives";
import React from "react";
import {
  Input as RACInput,
  TextField as RACTextField,
  type InputProps as RACInputProps,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import "./input.css";

export type InputFieldProps = SharedFieldProps & RACTextFieldProps;
export function InputField({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  ...props
}: InputFieldProps) {
  const classNames = clsx(className, "field");
  return (
    <RACTextField className={classNames} {...props}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}

export type InputProps = RACInputProps;
export const Input = React.forwardRef(function Input(
  { className, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const classNames = clsx(className, "input");
  return <RACInput className={classNames} ref={ref} {...props} />;
});
