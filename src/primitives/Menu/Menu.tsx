import clsx from "clsx";
import { IconChevronDown } from "icons";
import {
  Button,
  ButtonProps,
  Description,
  DescriptionProps,
  IconButton,
  Keyboard,
  KeyboardProps,
  Label,
  LabelProps,
  TextHeading,
  type TextHeadingProps,
} from "primitives";
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
import "./menu.css";

export type MenuProps<T> = RACMenuProps<T>;
export function Menu<T extends object>({ className, ...props }: MenuProps<T>) {
  return <RACMenu className={clsx(className, "menu")} {...props} />;
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
export function MenuItem({ className, ...props }: MenuItemProps) {
  const classNames = clsx(className, "menu-item");
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <RACMenuItem {...props} className={classNames} textValue={textValue}>
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
export function MenuHeader({ className, ...props }: MenuHeaderProps) {
  const classNames = clsx(className, "menu-header");
  return <div {...props} className={classNames} />;
}

export type MenuSectionProps = React.ComponentPropsWithoutRef<"div">;
export function MenuSection({ className, ...props }: MenuSectionProps) {
  const classNames = clsx(className, "menu-section");
  return <div {...props} className={classNames} />;
}

export type MenuHeadingProps = TextHeadingProps;
export function MenuHeading({ className, ...props }: MenuHeadingProps) {
  const classNames = clsx(className, "menu-heading");
  return <TextHeading {...props} className={classNames} />;
}

export type MenuSeparatorProps = RACSeparatorProps;
export function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  const classNames = clsx(className, "menu-separator");
  return <RACSeparator {...props} className={classNames} />;
}

export type MenuLabelProps = LabelProps;
export function MenuLabel({ className, ...props }: MenuLabelProps) {
  const classNames = clsx(className, "menu-label");
  return <Label {...props} className={classNames} />;
}

export type MenuDescriptionProps = DescriptionProps;
export function MenuDescription({ className, ...props }: MenuDescriptionProps) {
  const classNames = clsx(className, "menu-description");
  return <Description {...props} className={classNames} />;
}

export type MenuShortcutProps = KeyboardProps;
export function MenuShortcut({
  children,
  className,
  ...props
}: MenuShortcutProps) {
  const classNames = clsx(className, "menu-shortcut");
  return (
    <Keyboard {...props} className={classNames}>
      {children}
    </Keyboard>
  );
}
