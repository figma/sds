import { clsx } from "clsx";
import { ComponentProps, useState } from "react";
import css from "./Image.module.css";

export type ImageProps = Omit<ComponentProps<"img">, "alt"> & {
  alt: string;
  aspectRatio?: "square" | "video" | "wide" | "ultraWide";
  size?: "small" | "medium" | "large";
  variant?: "default" | "rounded";
};
export function Image({
  aspectRatio = "square",
  size = "medium",
  variant = "rounded",
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const getAspectRatioClass = (ratio: string) => {
    switch (ratio) {
      case "square":
        return css.aspectRatioSquare;
      case "video":
        return css.aspectRatioVideo;
      case "wide":
        return css.aspectRatioWide;
      case "ultraWide":
        return css.aspectRatioUltraWide;
      default:
        return css.aspectRatioSquare;
    }
  };

  const classNames = clsx(
    css.image,
    getAspectRatioClass(aspectRatio),
    css[size],
    variant === "rounded" && css.rounded,
    !loaded && css.loading,
  );

  return (
    <>
      {!loaded && <span className={clsx(css.placeholder, classNames)} />}
      {props.src && (
        <img className={classNames} {...props} onLoad={() => setLoaded(true)} />
      )}
    </>
  );
}

export type PictureProps = ComponentProps<"picture">;
export function Picture({ ...props }: PictureProps) {
  return <picture className={css.picture} {...props} />;
}

export type PictureSourceProps = ComponentProps<"source">;
export function PictureSource({ ...props }: PictureSourceProps) {
  return <source className={css.source} {...props} />;
}
