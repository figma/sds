import {
  Button,
  ButtonProps,
  Description,
  DescriptionProps,
  Heading,
  HeadingProps,
  IconButton,
  Keyboard,
  KeyboardProps,
  Label,
  LabelProps,
} from "components";
import { IconChevronDown } from "icons";
import type React from "react";
import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuTrigger as RACMenuTrigger,
  Popover as RACPopover,
  Separator as RACSeparator,
  type MenuItemProps as RACMenuItemProps,
  type MenuProps as RACMenuProps,
  type MenuTriggerProps as RACMenuTriggerProps,
  type PopoverProps as RACPopoverProps,
  type SeparatorProps as RACSeparatorProps,
} from "react-aria-components";
import css from "./Menu.module.css";

export type MenuProps<T> = RACMenuProps<T>;
export function Menu<T extends object>({ ...props }: MenuProps<T>) {
  return <RACMenu className={css.menu} {...props} />;
}

export type MenuTriggerProps = RACMenuTriggerProps;
export function MenuTrigger({ ...props }: MenuTriggerProps) {
  return <RACMenuTrigger {...props} />;
}

export interface MenuButtonProps<T>
  extends RACMenuProps<T>,
    Omit<RACMenuTriggerProps, "children"> {
  label: string;
  variant?: ButtonProps["variant"];
  placement?: MenuPopoverProps["placement"];
  icon?: React.ReactNode;
}
export function MenuButton<T extends object>({
  label,
  children,
  icon,
  placement,
  variant,
  ...props
}: MenuButtonProps<T>) {
  return (
    <MenuTrigger>
      {icon ? (
        <IconButton variant={variant} aria-label={label}>
          {icon}
        </IconButton>
      ) : (
        <Button variant={variant}>{label}</Button>
      )}
      <MenuPopover placement={placement}>
        <Menu {...props}>{children}</Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export type MenuPopoverProps = RACPopoverProps;
export function MenuPopover({ ...props }: MenuPopoverProps) {
  return <RACPopover {...props} />;
}

export type MenuItemProps = RACMenuItemProps;
export function MenuItem({ ...props }: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <RACMenuItem {...props} className={css.item} textValue={textValue}>
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && <IconChevronDown />}
        </>
      )}
    </RACMenuItem>
  );
}

export type MenuHeaderProps = React.ComponentPropsWithoutRef<"div">;
export function MenuHeader({ ...props }: MenuHeaderProps) {
  return <div {...props} className={css.header} />;
}

export type MenuSectionProps = React.ComponentPropsWithoutRef<"div">;
export function MenuSection({ ...props }: MenuSectionProps) {
  return <div {...props} className={css.section} />;
}

export type MenuHeadingProps = HeadingProps;
export function MenuHeading({ ...props }: MenuHeadingProps) {
  return <Heading {...props} className={css.heading} />;
}

export type MenuSeparatorProps = RACSeparatorProps;
export function MenuSeparator({ ...props }: MenuSeparatorProps) {
  return <RACSeparator {...props} className={css.separator} />;
}

export type MenuLabelProps = LabelProps;
export function MenuLabel({ ...props }: MenuLabelProps) {
  return <Label {...props} className={css.label} />;
}

export type MenuDescriptionProps = DescriptionProps;
export function MenuDescription({ ...props }: MenuDescriptionProps) {
  return <Description {...props} className={css.description} />;
}

export type MenuShortcutProps = KeyboardProps;
export function MenuShortcut({ children, ...props }: MenuShortcutProps) {
  return (
    <Keyboard {...props} className={css.shortcut}>
      {children}
    </Keyboard>
  );
}
