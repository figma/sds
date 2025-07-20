import { Description, FieldError, Label, SharedFieldProps } from "components";
import { IconCheck, IconMinus } from "icons";
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import css from "./Checkbox.module.css";

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, "children">,
    SharedFieldProps {
  children?: React.ReactNode;
}

export function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup className={css.group} {...props}>
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
  label,
  description,
  errorMessage,
  ...props
}: CheckboxFieldProps) {
  const labelText: string | undefined =
    label || (typeof children === "string" ? children : undefined);
  return (
    <RACCheckbox className={css.field} {...props}>
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

export type CheckboxProps = React.ComponentProps<"div">;
export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <div className={css.checkbox} {...props}>
      <IconMinus aria-hidden="true" size="16" />
      <IconCheck aria-hidden="true" size="16" />
    </div>
  );
}
