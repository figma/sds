import clsx from "clsx";
import { Text, TextStrong } from "primitives";
import React from "react";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import "./avatar.css";

type SharedAvatarProps = {
  src?: string | null;
  square?: boolean;
  initials?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
};

function renderInitialsAndImage({
  initials,
  src,
  alt,
}: {
  initials: AvatarProps["initials"];
  src: AvatarProps["src"];
  alt: AvatarProps["alt"];
}) {
  return (
    <>
      {initials && (
        <svg viewBox="0 0 100 100" aria-hidden={alt ? undefined : "true"}>
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
      {src && <img src={src} alt={alt} />}
    </>
  );
}

export type AvatarProps = SharedAvatarProps &
  React.ComponentPropsWithoutRef<"span">;
export function Avatar({
  className,
  src = null,
  square = false,
  initials,
  alt = "",
  size = "medium",
  ...props
}: AvatarProps) {
  const classNames = clsx(
    className,
    "avatar",
    `avatar-size-${size}`,
    `avatar-shape-${square ? "square" : "circle"}`,
    src ? `avatar-image` : "avatar-initials",
  );

  return (
    <span className={classNames} {...props}>
      {renderInitialsAndImage({ initials, src, alt })}
    </span>
  );
}

export type AvatarButtonProps = SharedAvatarProps & AnchorOrButtonProps;
export const AvatarButton = React.forwardRef(function AvatarButton(
  {
    className,
    src = null,
    square = false,
    initials,
    alt = "",
    size = "medium",
    ...props
  }: AvatarButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "avatar",
    "avatar-button",
    `avatar-size-${size}`,
    `avatar-shape-${square ? "square" : "circle"}`,
    src ? `avatar-image` : "avatar-initials",
  );
  return (
    <AnchorOrButton {...props} className={classNames} ref={ref}>
      {renderInitialsAndImage({ initials, src, alt })}
    </AnchorOrButton>
  );
});

export type AvatarBlockProps = React.ComponentPropsWithoutRef<"div"> & {
  title: string;
  description?: string;
};
export const AvatarBlock = ({
  className,
  children,
  title,
  description,
  ...props
}: AvatarBlockProps) => {
  const classNames = clsx(className, "avatar-block");
  return (
    <div className={classNames} {...props}>
      {children}
      <TextStrong slot="label">{title}</TextStrong>
      {description && <Text slot="description">{description}</Text>}
    </div>
  );
};

export type AvatarGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  max?: number;
  spacing?:
    | "100"
    | "200"
    | "300"
    | "negative-100"
    | "negative-200"
    | "negative-300";
};
export const AvatarGroup = ({
  className,
  children,
  max = 3,
  spacing = "200",
  ...props
}: AvatarGroupProps) => {
  const classNames = clsx(
    className,
    "avatar-group",
    `avatar-group-spacing-${spacing}`,
  );
  const childArray = React.Children.toArray(children);
  const childCount = childArray.length;
  const overflow = Math.max(0, childCount - max);
  const filteredChildren = childArray.splice(0, childCount - overflow);
  return (
    <div className={classNames} {...props}>
      {filteredChildren}
      {overflow > 0 && (
        <span className="avatar-group-overflow">+{overflow}</span>
      )}
    </div>
  );
};
