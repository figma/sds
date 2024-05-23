import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";
import {
  Heading as RACHeading,
  Text as RACText,
  type HeadingProps as RACHeadingProps,
  type TextProps as RACTextProps,
} from "react-aria-components";
import { Link } from "ui/Link/Link";
import "./text.css";

export type TextProps = RACTextProps;
export function Text({ className, elementType = "p", ...props }: TextProps) {
  const classNames = clsx(className, "text-body-base");
  return (
    <RACText elementType={elementType} className={classNames} {...props} />
  );
}
export type TextSmallProps = RACTextProps;
export function TextSmall({ className, ...props }: TextSmallProps) {
  const classNames = clsx(className, "text-body-small");
  return <RACText className={classNames} {...props} />;
}
export type TextStrongProps = ComponentPropsWithoutRef<"strong">;
export function TextStrong({ className, ...props }: TextStrongProps) {
  const classNames = clsx(className, "text-body-strong");
  return <strong className={classNames} {...props} />;
}
export type TextEmphasisProps = ComponentPropsWithoutRef<"em">;
export function TextEmphasis({ className, ...props }: TextEmphasisProps) {
  const classNames = clsx(className, "text-body-emphasis");
  return <em className={classNames} {...props} />;
}
export type TextLinkProps = ComponentPropsWithoutRef<typeof Link>;
export function TextLink({ className, ...props }: TextLinkProps) {
  const classNames = clsx(className, "text-body-link");
  return <Link className={classNames} {...props} />;
}
export type TextCodeProps = RACTextProps;
export function TextCode({ className, ...props }: TextCodeProps) {
  const classNames = clsx(className, "text-body-code");
  return <RACText className={classNames} {...props} />;
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

export type TextInputProps = RACTextProps;
export function TextInput({ className, ...props }: TextInputProps) {
  const classNames = clsx(className, "text-input");
  return <RACText className={classNames} {...props} />;
}

export type TextSubtitleProps = RACHeadingProps;
export function TextSubtitle({ className, ...props }: TextSubtitleProps) {
  const classNames = clsx(className, "text-subtitle");
  return <RACHeading className={classNames} {...props} />;
}
export type TextSubheadingProps = RACHeadingProps;
export function TextSubheading({ className, ...props }: TextSubheadingProps) {
  const classNames = clsx(className, "text-subheading");
  return <RACHeading className={classNames} {...props} />;
}
export type TextHeadingProps = RACHeadingProps;
export function TextHeading({ className, ...props }: TextHeadingProps) {
  const classNames = clsx(className, "text-heading");
  return <RACHeading className={classNames} {...props} />;
}
export type TextTitleHeroProps = RACHeadingProps;
export function TextTitleHero({ className, ...props }: TextTitleHeroProps) {
  const classNames = clsx(className, "text-title-hero");
  return <RACHeading className={classNames} {...props} />;
}
export type TextTitlePageProps = RACHeadingProps;
export function TextTitlePage({ className, ...props }: TextTitlePageProps) {
  const classNames = clsx(className, "text-title-page");
  return <RACHeading className={classNames} {...props} />;
}
