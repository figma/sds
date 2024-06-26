import { clsx } from "clsx";
import { IconCheck, IconMinus } from "icons";
import { Description, FieldError, Label, SharedFieldProps } from "primitives";
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import "./checkbox.css";

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, "children">,
    SharedFieldProps {
  children?: React.ReactNode;
}

export function CheckboxGroup({
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) {
  const classNames = clsx(className, "checkbox-group");
  return (
    <RACCheckboxGroup {...props} className={classNames}>
      {label && <Label>{label}</Label>}
      {description && <Description>{description}</Description>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
      {children}
    </RACCheckboxGroup>
  );
}

export type CheckboxFieldProps = RACCheckboxProps & SharedFieldProps;
export function CheckboxField({
  children,
  className,
  label,
  description,
  errorMessage,
  ...props
}: CheckboxFieldProps) {
  const classNames = clsx(className, "checkbox-field");
  const labelText: string | undefined =
    label || (typeof children === "string" ? children : undefined);
  return (
    <RACCheckbox className={classNames} {...props}>
      <>
        <Label>{labelText}</Label>
        <Checkbox />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        {labelText !== children && children}
      </>
    </RACCheckbox>
  );
}

export type CheckboxProps = React.ComponentPropsWithoutRef<"div">;
export function Checkbox({ className, ...props }: CheckboxProps) {
  const classNames = clsx(className, "checkbox");
  return (
    <div className={classNames} {...props}>
      <IconMinus aria-hidden="true" className="icon-indeterminate" size="16" />
      <IconCheck aria-hidden="true" className="icon-selected" size="16" />
    </div>
  );
}
