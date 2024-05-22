import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";
import {
  Heading as RACHeading,
  Text as RACText,
  type HeadingProps as RACHeadingProps,
  type TextProps as RACTextProps,
} from "react-aria-components";
import { Link } from "ui";
import "./text.css";

export type TextProps = RACTextProps;
export function Text({ className, ...props }: TextProps) {
  const classNames = clsx(className, "text");
  return <RACText elementType="p" {...props} className={classNames} />;
}

export type TextLinkProps = ComponentPropsWithoutRef<typeof Link>;
export function TextLink({ className, ...props }: TextLinkProps) {
  const classNames = clsx(className, "text-link");
  return <Link {...props} className={classNames} />;
}

export type TextStrongProps = ComponentPropsWithoutRef<"strong">;
export function TextStrong({ className, ...props }: TextStrongProps) {
  const classNames = clsx(className, "text-strong");
  return <strong {...props} className={classNames} />;
}

export type TextCodeProps = ComponentPropsWithoutRef<"code">;
export function TextCode({ className, ...props }: TextCodeProps) {
  const classNames = clsx(className, "text-code");
  return <code {...props} className={classNames} />;
}

export type TextSubheadingProps = RACHeadingProps;
export function TextSubheading({ className, ...props }: TextSubheadingProps) {
  const classNames = clsx(className, "text-subheading");
  return <RACHeading className={classNames} {...props} />;
}

export type TextSubtitleProps = RACHeadingProps;
export function TextSubtitle({ className, ...props }: TextSubtitleProps) {
  const classNames = clsx(className, "text-subtitle");
  return <RACHeading className={classNames} {...props} />;
}

export type TextHeroProps = RACHeadingProps;
export function TextHero({ className, ...props }: TextHeroProps) {
  const classNames = clsx(className, "text-hero");
  return <RACHeading className={classNames} {...props} />;
}

export type TextHeadingProps = RACHeadingProps;
export function TextHeading({ className, ...props }: TextHeadingProps) {
  const classNames = clsx(className, "text-heading");
  return <RACHeading className={classNames} {...props} />;
}

export type TextListItemProps = RACTextProps;
export function TextListItem({ className, ...props }: TextListItemProps) {
  const classNames = clsx(className, "text-list-item");
  return <RACText elementType="li" className={classNames} {...props} />;
}

export type TextListProps = ComponentPropsWithoutRef<"ul">;
export function TextList({ className, ...props }: TextListProps) {
  const classNames = clsx(className, "text-list");
  return <ul className={classNames} {...props} />;
}
