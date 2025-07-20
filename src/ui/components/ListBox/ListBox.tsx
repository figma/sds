import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  type ListBoxItemProps as RACListBoxItemProps,
  type ListBoxProps as RACListBoxProps,
} from "react-aria-components";
import css from "./ListBox.module.css";

export type ListBoxProps<T> = RACListBoxProps<T>;
export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  return (
    <RACListBox className={css.listBox} {...props}>
      {children}
    </RACListBox>
  );
}

export type ListBoxItemProps = RACListBoxItemProps;
export function ListBoxItem({ ...props }: ListBoxItemProps) {
  return <RACListBoxItem className={css.item} {...props} />;
}
