import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";
import css from "./Title.module.css";

type TextTruncateProps = { lineClamp?: number };

export type TitleHeroProps = TextTruncateProps & ComponentProps<"h1">;
export function TitleHero({ lineClamp, ...props }: TitleHeroProps) {
  const classNames = clsx(!!lineClamp && css.truncate, css.titleHero);
  const style = lineClamp
    ? { "--text-truncate-line-clamp": lineClamp }
    : undefined;
  return <h1 style={style} className={classNames} {...props} />;
}

export type TitlePageProps = TextTruncateProps & ComponentProps<"h2">;
export function TitlePage({ lineClamp, ...props }: TitlePageProps) {
  const classNames = clsx(!!lineClamp && css.truncate, css.titlePage);
  const style = lineClamp
    ? { "--text-truncate-line-clamp": lineClamp }
    : undefined;
  return <h2 style={style} className={classNames} {...props} />;
}

export type SubtitleProps = TextTruncateProps & ComponentProps<"p">;
export function Subtitle({ lineClamp, ...props }: SubtitleProps) {
  const classNames = clsx(!!lineClamp && css.truncate, css.subtitle);
  const style = lineClamp
    ? { "--text-truncate-line-clamp": lineClamp }
    : undefined;
  return <p style={style} className={classNames} {...props} />;
}

export type HeadingProps = TextTruncateProps & ComponentProps<"h3">;
export function Heading({ lineClamp, ...props }: HeadingProps) {
  const classNames = clsx(!!lineClamp && css.truncate, css.heading);
  const style = lineClamp
    ? { "--text-truncate-line-clamp": lineClamp }
    : undefined;
  return <h3 style={style} className={classNames} {...props} />;
}

export type SubheadingProps = TextTruncateProps & ComponentProps<"p">;
export function Subheading({ lineClamp, ...props }: SubheadingProps) {
  const classNames = clsx(!!lineClamp && css.truncate, css.subheading);
  const style = lineClamp
    ? { "--text-truncate-line-clamp": lineClamp }
    : undefined;
  return <p style={style} className={classNames} {...props} />;
}

export type ContentHeadingProps = ComponentProps<"div"> & {
  align?: "start" | "center";
  heading: string;
  subheading?: string;
};
export function ContentHeading({
  align = "start",
  heading,
  subheading,
  ...props
}: ContentHeadingProps) {
  const classNames = clsx(
    css.contentHeading,
    css[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
  );
  return (
    <div className={classNames} {...props}>
      <Heading>{heading}</Heading>
      {subheading && <Subtitle>{subheading}</Subtitle>}
    </div>
  );
}

export type ContentTitleProps = ComponentProps<"div"> & {
  align?: "start" | "center";
  title: ReactNode;
  subtitle?: ReactNode;
};
export function ContentTitle({
  align = "start",
  title,
  subtitle,
  ...props
}: ContentTitleProps) {
  const classNames = clsx(
    css.contentTitle,
    css[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
  );
  return (
    <div className={classNames} {...props}>
      {title}
      {subtitle && subtitle}
    </div>
  );
}
