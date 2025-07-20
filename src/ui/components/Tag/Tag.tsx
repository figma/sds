import { clsx } from "clsx";
import { IconX } from "icons";
import React, { ComponentProps, ReactNode } from "react";
import {
  Button as RACButton,
  PressEvent as RACPressEvent,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagList as RACTagList,
  type TagGroupProps as RACTagGroupProps,
  type TagListProps as RACTagListProps,
  type TagProps as RACTagProps,
} from "react-aria-components";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import css from "./Tag.module.css";

type TagScheme = "brand" | "danger" | "positive" | "warning" | "neutral";
type TagVariant = "primary" | "secondary";

type SharedTagProps = {
  scheme?: TagScheme;
  variant?: TagVariant;
};

type TagRemovableProps = { onRemove?: (e: RACPressEvent) => void };

export type TagProps = SharedTagProps &
  TagRemovableProps &
  ComponentProps<"span">;

export function Tag({
  children,
  scheme = "brand",
  variant = "primary",
  onRemove,
  ...props
}: TagProps) {
  const classNames = clsx(
    css.root,
    css[`scheme${scheme.charAt(0).toUpperCase() + scheme.slice(1)}`],
    css[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
  );
  return (
    <span {...props} className={classNames}>
      {children}{" "}
      {onRemove && (
        <RACButton className={css.removeButton} onPress={onRemove}>
          <IconX size="16" />
        </RACButton>
      )}
    </span>
  );
}

export type TagButtonProps = SharedTagProps & AnchorOrButtonProps;
export const TagButton = React.forwardRef(function Tag(
  { scheme = "brand", variant = "primary", ...props }: TagButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  return <AnchorOrButton {...props} ref={ref} />;
});

export type TagToggleProps = RACTagProps & { iconStart?: ReactNode };
export function TagToggle({
  children,
  iconStart,
  textValue,
  ...props
}: TagToggleProps) {
  const classNames = clsx(css.root, css.toggle);
  textValue =
    textValue ||
    (typeof children === "string" ? children : (children || "").toString());
  return (
    <RACTag className={classNames} textValue={textValue} {...props}>
      <>
        {iconStart}
        {children}
      </>
    </RACTag>
  );
}

export type TagToggleGroupProps = RACTagGroupProps;
export function TagToggleGroup({ ...props }: TagToggleGroupProps) {
  return <RACTagGroup className={css.toggleGroup} {...props} />;
}

export type TagToggleListProps<T> = RACTagListProps<T>;
export function TagToggleList<T extends object>({
  ...props
}: TagToggleListProps<T>) {
  return <RACTagList className={css.toggleList} {...props} />;
}
