import { clsx } from "clsx";
import React from "react";
import {
  Input as RACInput,
  TextField as RACTextField,
  type InputProps as RACInputProps,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import {
  Description,
  FieldError,
  Label,
  SharedFieldProps,
} from "ui/Fieldset/Fieldset";
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
      <Label>{label}</Label>
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
