import { clsx } from "clsx";
import { Description, FieldError, Label, SharedFieldProps } from "primitives";
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from "react-aria-components";
import "./radio.css";

export interface RadioGroupProps
  extends Omit<RACRadioGroupProps, "children">,
    SharedFieldProps {
  children?: React.ReactNode;
}

export function RadioGroup({
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) {
  const classNames = clsx(className, "radio-group");
  return (
    <RACRadioGroup {...props} className={classNames}>
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
  className,
  label,
  description,
  errorMessage,
  ...props
}: RadioFieldProps) {
  const classNames = clsx(className, "radio-field");
  const labelText: string | undefined =
    label || (typeof children === "string" ? children : undefined);
  return (
    <RACRadio className={classNames} {...props}>
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

export type RadioProps = React.ComponentPropsWithoutRef<"div">;
export function Radio({ className, ...props }: RadioProps) {
  const classNames = clsx(className, "radio");
  return (
    <div className={classNames} {...props}>
      <span aria-hidden="true" className="radio-check" />
    </div>
  );
}
