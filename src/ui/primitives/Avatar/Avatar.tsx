import clsx from "clsx";
import React from "react";
import {
  AnchorOrButton,
  type AnchorOrButtonProps,
} from "ui/utils/AnchorOrButton";
import "./avatar.css";

type SharedAvatarProps = {
  src?: string | null;
  square?: boolean;
  initials?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
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
  size = "md",
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
    size = "md",
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

export type AvatarBlockProps = React.ComponentPropsWithoutRef<"div">;
export const AvatarBlock = ({
  className,
  children,
  ...props
}: AvatarGroupProps) => {
  const classNames = clsx(className, "avatar-block");
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export type AvatarGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  max?: number;
  spacing?: "xs" | "sm" | "md";
  overlap?: boolean;
};
export const AvatarGroup = ({
  className,
  children,
  max = 3,
  spacing = "sm",
  overlap,
  ...props
}: AvatarGroupProps) => {
  const classNames = clsx(
    className,
    "avatar-group",
    `avatar-group-spacing-${spacing}`,
    overlap && "avatar-group-overlap",
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
