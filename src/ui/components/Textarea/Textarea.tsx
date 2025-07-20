import { clsx } from "clsx";
import { Description, FieldError, Label, SharedFieldProps } from "components";
import { forwardRef } from "react";
import {
  TextArea as RACTextArea,
  TextField as RACTextField,
  type TextAreaProps as RACTextAreaProps,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import css from "./Textarea.module.css";

export type SharedTextareaProps = { isResizable?: boolean };

export type TextareaFieldProps = SharedFieldProps &
  RACTextFieldProps &
  SharedTextareaProps;
export function TextareaField({
  placeholder,
  label,
  description,
  errorMessage,
  ...props
}: TextareaFieldProps) {
  return (
    <RACTextField className={css.field} {...props}>
      {label && <Label>{label}</Label>}
      <Textarea placeholder={placeholder} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}

export type TextareaProps = SharedTextareaProps & RACTextAreaProps;
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ isResizable = true, ...props }, ref) {
    const classNames = clsx(css.textarea, isResizable && css.resizable);
    return <RACTextArea ref={ref} className={classNames} {...props} />;
  },
);
