import clsx from "clsx";
import React, { ComponentProps } from "react";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import css from "./Avatar.module.css";

type SharedAvatarProps = {
  src?: string | null;
  shape?: "circle" | "square";
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

export type AvatarProps = SharedAvatarProps & ComponentProps<"span">;
export function Avatar({
  src = null,
  shape = "circle",
  initials,
  alt = "",
  size = "medium",
  ...props
}: Omit<AvatarProps, "className">) {
  const classNames = clsx(css.avatar, css[size], css[shape]);

  return (
    <span className={classNames} {...props}>
      {renderInitialsAndImage({ initials, src, alt })}
    </span>
  );
}

export type AvatarButtonProps = SharedAvatarProps & AnchorOrButtonProps;
export const AvatarButton = React.forwardRef(function AvatarButton(
  {
    src = null,
    shape = "circle",
    initials,
    alt = "",
    size = "medium",
    ...props
  }: Omit<AvatarButtonProps, "className">,
  ref: React.ForwardedRef<HTMLElement>,
) {
  return (
    <AnchorOrButton {...props} ref={ref}>
      {renderInitialsAndImage({ initials, src, alt })}
    </AnchorOrButton>
  );
});

export type AvatarBlockProps = ComponentProps<"div"> & {
  title: string;
  description?: string;
};
export const AvatarBlock = ({
  children,
  title,
  description,
  ...props
}: Omit<AvatarBlockProps, "className">) => {
  return (
    <div className={css.block} {...props}>
      {children}
      <strong className={css.title}>{title}</strong>
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export type AvatarGroupProps = ComponentProps<"div"> & {
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
  children,
  max = 3,
  spacing = "200",
  ...props
}: Omit<AvatarGroupProps, "className">) => {
  const spacingClass = spacing.startsWith("negative-")
    ? `spacingNegative${spacing.slice(9)}`
    : `spacing${spacing}`;

  const classNames = clsx(css.group, css[spacingClass]);
  const childArray = React.Children.toArray(children);
  const childCount = childArray.length;
  const overflow = Math.max(0, childCount - max);
  const filteredChildren = childArray.splice(0, childCount - overflow);
  return (
    <div className={classNames} {...props}>
      {filteredChildren}
      {overflow > 0 && <span className={css.overflow}>+{overflow}</span>}
    </div>
  );
};
