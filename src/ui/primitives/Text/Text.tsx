import { clsx } from "clsx";
import { useMediaQuery } from "hooks";
import { Flex } from "layout";
import { Link } from "primitives";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Text as RACText,
  type TextProps as RACTextProps,
} from "react-aria-components";
import "./text.css";

type TextLineHeightProps = { lineHeight?: "body" | "single" };

export type TextProps = RACTextProps & TextLineHeightProps;
export function Text({
  className,
  elementType = "p",
  lineHeight = "body",
  ...props
}: TextProps) {
  const classNames = clsx(
    className,
    "text-body-base",
    `text-line-height-${lineHeight}`,
  );
  return (
    <RACText elementType={elementType} className={classNames} {...props} />
  );
}
export type TextSmallProps = RACTextProps & TextLineHeightProps;
export function TextSmall({
  className,
  elementType = "small",
  lineHeight = "body",
  ...props
}: TextSmallProps) {
  const classNames = clsx(
    className,
    "text-body-small",
    `text-line-height-${lineHeight}`,
  );
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextSmallStrongProps = RACTextProps & TextLineHeightProps;
export function TextSmallStrong({
  className,
  elementType = "small",
  lineHeight = "body",
  ...props
}: TextSmallProps) {
  const classNames = clsx(
    className,
    "text-body-small-strong",
    `text-line-height-${lineHeight}`,
  );
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextStrongProps = RACTextProps;
export function TextStrong({
  className,
  elementType = "strong",
  ...props
}: TextStrongProps) {
  const classNames = clsx(className, "text-body-strong");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextEmphasisProps = RACTextProps;
export function TextEmphasis({
  className,
  elementType,
  ...props
}: TextEmphasisProps) {
  const classNames = clsx(className, "text-body-emphasis");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
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

export type TextInputProps = RACTextProps;
export function TextInput({ className, ...props }: TextInputProps) {
  const classNames = clsx(className, "text-input");
  return <RACText className={classNames} {...props} />;
}

export type TextTitleHeroProps = RACTextProps;
export function TextTitleHero({
  className,
  elementType = "h1",
  ...props
}: TextTitleHeroProps) {
  const classNames = clsx(className, "text-title-hero");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextTitlePageProps = RACTextProps;
export function TextTitlePage({
  className,
  elementType = "h2",
  ...props
}: TextTitlePageProps) {
  const classNames = clsx(className, "text-title-page");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextSubtitleProps = RACTextProps;
export function TextSubtitle({
  className,
  elementType = "p",
  ...props
}: TextSubtitleProps) {
  const classNames = clsx(className, "text-subtitle");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextHeadingProps = RACTextProps;
export function TextHeading({
  className,
  elementType = "h3",
  ...props
}: TextHeadingProps) {
  const classNames = clsx(className, "text-heading");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}
export type TextSubheadingProps = RACTextProps;
export function TextSubheading({
  className,
  elementType = "p",
  ...props
}: TextSubheadingProps) {
  const classNames = clsx(className, "text-subheading");
  return (
    <RACText className={classNames} elementType={elementType} {...props} />
  );
}

export type TextPriceProps = RACTextProps & {
  currency: string;
  price: string;
  label?: string;
  size?: "small" | "large";
};
export function TextPrice({
  className,
  currency,
  size = "large",
  price,
  label,
  ...props
}: TextPriceProps) {
  const classNames = clsx(className, "text-price", `text-price-size-${size}`);
  const content = (
    <>
      <sup className="text-price-currency">{currency}</sup>
      {price}
    </>
  );
  return (
    <RACText elementType="p" className={classNames} {...props}>
      {size === "small" ? (
        <TextHeading elementType="span">{content}</TextHeading>
      ) : (
        <TextTitlePage elementType="span">{content}</TextTitlePage>
      )}

      {label && <TextSmall>{label}</TextSmall>}
    </RACText>
  );
}

export type TextListItemProps = ComponentPropsWithoutRef<"li">;
export function TextListItem({ className, ...props }: TextListItemProps) {
  const classNames = clsx(className, "text-list-item");
  return <li className={classNames} {...props} />;
}

export type TextListProps = Omit<ComponentPropsWithoutRef<"ul">, "title"> & {
  title?: ReactNode;
  density?: "default" | "tight";
};
export function TextList({
  children,
  className,
  density = "default",
  title,
  ...props
}: TextListProps) {
  const classNames = clsx(
    className,
    "text-list",
    `text-list-density-${density}`,
  );
  return (
    <ul className={classNames} {...props}>
      {title && <li className="text-list-title">{title}</li>}
      {children}
    </ul>
  );
}

export type TextLinkListProps = TextListProps;
export function TextLinkList({ className, ...props }: TextLinkListProps) {
  const classNames = clsx(className, "text-link-list");
  return <TextList className={classNames} {...props} />;
}

export type TextContentHeadingProps = ComponentPropsWithoutRef<"div"> & {
  align?: "start" | "center";
  heading: string;
  subheading?: string;
};
export function TextContentHeading({
  align = "start",
  className,
  heading,
  subheading,
  ...props
}: TextContentHeadingProps) {
  const classNames = clsx(
    className,
    "text-content-heading",
    `text-align-${align}`,
  );
  return (
    <Flex direction="column" gap="200" className={classNames} {...props}>
      <TextHeading>{heading}</TextHeading>
      {subheading && <TextSubheading>{subheading}</TextSubheading>}
    </Flex>
  );
}

export type TextContentTitleProps = ComponentPropsWithoutRef<"div"> & {
  align?: "start" | "center";
  title: string;
  subtitle?: string;
};
export function TextContentTitle({
  align = "start",
  className,
  title,
  subtitle,
  ...props
}: TextContentTitleProps) {
  const classNames = clsx(className, "text-content-title");
  const { isMobile } = useMediaQuery();
  return (
    <Flex direction="column" gap="200" className={classNames} {...props}>
      {isMobile ? (
        <TextTitlePage className={`text-align-${align}`}>{title}</TextTitlePage>
      ) : (
        <TextTitleHero className={`text-align-${align}`}>{title}</TextTitleHero>
      )}

      {subtitle && (
        <TextSubtitle className={`text-align-${align}`}>
          {subtitle}
        </TextSubtitle>
      )}
    </Flex>
  );
}
