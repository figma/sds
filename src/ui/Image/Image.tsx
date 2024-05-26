import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./image.css";

export type ImageProps = Omit<ComponentPropsWithoutRef<"img">, "alt"> & {
  alt: string;
  aspectRatio?: "1-1" | "16-9" | "4-3" | "fill" | "natural";
  size?: "sm" | "md" | "lg" | "fill" | "natural";
  variant?: "default" | "rounded";
};
export function Image({
  aspectRatio = "natural",
  className,
  size = "natural",
  variant = "rounded",
  ...props
}: ImageProps) {
  const classNames = clsx(
    className,
    "image",
    `image-aspect-ratio-${aspectRatio}`,
    `image-size-${size}`,
    `image-variant-${variant}`,
  );
  return <img className={classNames} {...props} />;
}

export type PictureProps = ComponentPropsWithoutRef<"picture">;
export function Picture({ className, ...props }: PictureProps) {
  const classNames = clsx(className, "picture");
  return <picture className={classNames} {...props} />;
}

export type PictureSourceProps = ComponentPropsWithoutRef<"source">;
export function PictureSource({ ...props }: PictureSourceProps) {
  return <source {...props} />;
}
