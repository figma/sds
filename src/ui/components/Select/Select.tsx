import {
  Description,
  Field,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  SharedFieldProps,
  type ListBoxItemProps,
} from "components";
import { IconCheck, IconChevronDown } from "icons";
import React from "react";
import {
  Button as RACButton,
  Popover as RACPopover,
  Select as RACSelect,
  SelectValue as RACSelectValue,
  type SelectProps as RACSelectProps,
} from "react-aria-components";
import css from "./Select.module.css";

export interface SelectFieldProps<T extends object>
  extends Omit<SelectProps<T>, "children">,
    SharedFieldProps {
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function SelectField<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectFieldProps<T>) {
  return (
    <Select className={css.container} {...props}>
      <Field>
        {label && <Label>{label}</Label>}
        <RACButton className={css.select}>
          <RACSelectValue className={css.value} />
          <IconChevronDown aria-hidden="true" />
        </RACButton>
        <RACPopover>
          <ListBox items={items}>{children}</ListBox>
        </RACPopover>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Field>
    </Select>
  );
}

export type SelectProps<T extends object> = RACSelectProps<T>;
export function Select<T extends object>({ ...props }: SelectProps<T>) {
  return <RACSelect<T> {...props} />;
}

export type SelectItemProps = ListBoxItemProps;
export function SelectItem({ children, ...props }: SelectItemProps) {
  const textValue = typeof children === "string" ? children : "";
  return (
    <ListBoxItem textValue={textValue} className={css.item} {...props}>
      <>
        <IconCheck />
        {children}
      </>
    </ListBoxItem>
  );
}
