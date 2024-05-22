import clsx from "clsx";
import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  type ListBoxItemProps as RACListBoxItemProps,
  type ListBoxProps as RACListBoxProps,
} from "react-aria-components";
import "./listBox.css";

export type ListBoxProps<T> = RACListBoxProps<T>;
export function ListBox<T extends object>({
  children,
  className,
  ...props
}: ListBoxProps<T>) {
  const classNames = clsx(className, "list-box");
  return (
    <RACListBox className={classNames} {...props}>
      {children}
    </RACListBox>
  );
}

export type ListBoxItemProps = RACListBoxItemProps;
export function ListBoxItem({ className, ...props }: ListBoxItemProps) {
  const classNames = clsx(className, "list-box-item");
  return <RACListBoxItem className={classNames} {...props} />;
}
