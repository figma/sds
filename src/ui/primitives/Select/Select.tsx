import { clsx } from "clsx";
import { IconCheck, IconChevronDown } from "icons";
import {
  Description,
  Field,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  SharedFieldProps,
  type ListBoxItemProps,
} from "primitives";
import {
  Button as RACButton,
  Popover as RACPopover,
  Select as RACSelect,
  SelectValue as RACSelectValue,
  type SelectProps as RACSelectProps,
} from "react-aria-components";
import "./select.css";

export interface SelectFieldProps<T extends object>
  extends Omit<SelectProps<T>, "children">,
    SharedFieldProps {
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}
export function SelectField<T extends object>({
  className,
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectFieldProps<T>) {
  const classNames = clsx(className, "select-container");
  return (
    <Select className={classNames} {...props}>
      <Field>
        {label && <Label>{label}</Label>}
        <RACButton className="select">
          <RACSelectValue className="select-value" />
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
export function SelectItem({ children, className, ...props }: SelectItemProps) {
  const classNames = clsx(className, "select-item");
  const textValue = typeof children === "string" ? children : "";
  return (
    <ListBoxItem textValue={textValue} className={classNames} {...props}>
      <>
        <IconCheck className="select-item-check" />
        {children}
      </>
    </ListBoxItem>
  );
}
