import { clsx } from "clsx";
import { forwardRef } from "react";
import {
  TextArea as RACTextArea,
  TextField as RACTextField,
  type TextAreaProps as RACTextAreaProps,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import {
  Description,
  FieldError,
  Label,
  SharedFieldProps,
} from "ui/primitives";
import "./textArea.css";

export type SharedTextAreaProps = { isResizable?: boolean };

export type TextAreaFieldProps = SharedFieldProps &
  RACTextFieldProps &
  SharedTextAreaProps;
export function TextAreaField({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  ...props
}: TextAreaFieldProps) {
  const classNames = clsx(className, "field");
  return (
    <RACTextField className={classNames} {...props}>
      <Label>{label}</Label>
      <TextArea placeholder={placeholder} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}

export type TextAreaProps = SharedTextAreaProps & RACTextAreaProps;
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ isResizable = true, ...props }, ref) {
    const classNames = clsx("text-area", isResizable && "text-area-resizable");
    return <RACTextArea ref={ref} className={classNames} {...props} />;
  },
);
