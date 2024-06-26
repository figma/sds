import clsx from "clsx";
import { IconX } from "icons";
import React, { ReactNode } from "react";
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
import "./tag.css";

type TagScheme = "brand" | "danger" | "positive" | "warning" | "neutral";
type TagVariant = "primary" | "secondary";

type SharedTagProps = {
  scheme?: TagScheme;
  variant?: TagVariant;
};

type TagRemovableProps = { onRemove?: (e: RACPressEvent) => void };

export type TagProps = SharedTagProps &
  TagRemovableProps &
  React.ComponentPropsWithoutRef<"span">;
export function Tag({
  children,
  scheme = "brand",
  variant = "primary",
  onRemove,
  ...props
}: TagProps) {
  const classNames = clsx(
    "tag",
    `tag-scheme-${scheme}`,
    `tag-variant-${variant}`,
  );
  return (
    <span {...props} className={classNames}>
      {children}{" "}
      {onRemove && (
        <RACButton className="tag-remove-button" onPress={onRemove}>
          <IconX size="16" />
        </RACButton>
      )}
    </span>
  );
}

export type TagButtonProps = SharedTagProps & AnchorOrButtonProps;
export const TagButton = React.forwardRef(function Tag(
  {
    className,
    scheme = "brand",
    variant = "primary",
    ...props
  }: TagButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "tag",
    "tag-button",
    `tag-scheme-${scheme}`,
    `tag-variant-${variant}`,
  );

  return <AnchorOrButton {...props} className={classNames} ref={ref} />;
});

export type TagToggleProps = RACTagProps & { iconStart?: ReactNode };
export function TagToggle({
  children,
  className,
  iconStart,
  textValue,
  ...props
}: TagToggleProps) {
  const classNames = clsx(className, "tag", "tag-toggle");
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
export function TagToggleGroup({ className, ...props }: TagToggleGroupProps) {
  const classNames = clsx(className, "tag-toggle-group");
  return <RACTagGroup className={classNames} {...props} />;
}

export type TagToggleListProps<T> = RACTagListProps<T>;
export function TagToggleList<T extends object>({
  className,
  ...props
}: TagToggleListProps<T>) {
  const classNames = clsx(className, "tag-toggle-list");
  return <RACTagList className={classNames} {...props} />;
}
