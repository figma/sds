import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import "./image.css";

export type ImageProps = Omit<ComponentPropsWithoutRef<"img">, "alt"> & {
  alt: string;
  aspectRatio?: "1-1" | "16-9" | "4-3" | "auto";
  variant?: "default" | "rounded";
};
export function Image({
  aspectRatio = "auto",
  className,
  variant = "default",
  ...props
}: ImageProps) {
  const classNames = clsx(
    className,
    "image",
    `image-aspect-ratio-${aspectRatio}`,
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
