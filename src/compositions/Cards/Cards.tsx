import clsx from "clsx";
import { useMediaQuery } from "hooks";
import { IconStar } from "icons";
import { Flex } from "layout";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Avatar,
  AvatarBlock,
  AvatarProps,
  Button,
  ButtonGroup,
  ButtonProps,
  Text,
  TextHeading,
  TextList,
  TextListItem,
  TextSmall,
  TextStrong,
  TextTitlePage,
} from "ui";
import { AnchorOrButton, AnchorOrButtonProps } from "utils";
import "./cards.css";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * The alignment of the card content.
   */
  align?: "start" | "center" | "end";
  /**
   * The initial direction of the card.
   * All cards become vertical on mobile.
   */
  direction?: "horizontal" | "vertical";
  /**
   * The interaction props for the Card.
   * If present, the card itself is pressable.
   * AnchorOrButtonProps extend either button or anchor behavior.
   */
  interactionProps?: Omit<AnchorOrButtonProps, "aria-label"> & {
    "aria-label": string;
  };
  /**
   * An asset for the card.
   * Can be an Icon or an Image instance.
   */
  asset?: React.ReactNode;
  /**
   * Style variation of the card.
   * stroke and padded both add spacing around the card, default is unpadded.
   */
  variant?: "default" | "stroke" | "padded";
};

/**
 * The basic card generic component that can be used to create vanity card components.
 */
export function Card({
  align = "start",
  children,
  className,
  direction = "vertical",
  interactionProps,
  variant = "default",
  asset,
  ...props
}: CardProps) {
  const { isMobile } = useMediaQuery();
  const classNames = clsx(
    className,
    "card",
    `card-align-${align}`,
    `card-direction-${isMobile ? "vertical" : direction}`,
    `card-variant-${variant}`,
  );
  return (
    <div className={classNames} {...props}>
      {asset && <div className="card-asset">{asset}</div>}
      <div className="card-content">{children}</div>
      {interactionProps && (
        <AnchorOrButton className="card-interaction" {...interactionProps} />
      )}
    </div>
  );
}

export type PricingCardProps = {
  /**
   * The heading for the price point
   */
  heading: string;
  /**
   * The price excluding currency
   */
  price: number;
  /**
   * The text for price per
   */
  pricePer?: string;
  /**
   * A list of items to appear in a bulleted list
   */
  items: string[];
  /**
   * The text labeling the action button
   */
  action: string;
  /**
   * The action variant
   */
  actionVariant?: ButtonProps["variant"];
  /**
   * The action of the button.
   */
  onAction: () => void;
};

/**
 * A card that demonstrates price point and value, often in comparison to other cards.
 */
export function PricingCard({
  heading,
  action,
  actionVariant = "primary",
  onAction,
  items,
  price,
  pricePer = "/ per month",
  ...props
}: PricingCardProps) {
  return (
    <Card {...props} direction="vertical" variant="stroke">
      <Flex direction="column" gap="200">
        <TextHeading>{heading}</TextHeading>
        <TextTitlePage>
          ${price}
          <Text elementType="span"> {pricePer}</Text>
        </TextTitlePage>
      </Flex>
      <TextList>
        {items.map((item) => (
          <TextListItem key={item}>{item}</TextListItem>
        ))}
      </TextList>
      <Flex alignPrimary="stretch">
        <ButtonGroup align="justify">
          <Button variant={actionVariant} onPress={onAction}>
            {action}
          </Button>
        </ButtonGroup>
      </Flex>
    </Card>
  );
}

export type ProductInfoCardProps = Pick<CardProps, "asset"> & {
  /**
   * The product name
   */
  heading: string;
  /**
   * The price excluding currency
   */
  price: number;
  /**
   * The description of the product
   */
  description: string;
};

/**
 * A card that demonstrates product information with a CTA
 */
export function ProductInfoCard({
  asset,
  heading,
  price,
  description,
  ...props
}: ProductInfoCardProps) {
  return (
    <Card {...props} direction="vertical" variant="stroke" asset={asset}>
      <Flex direction="column" gap="200">
        <Text>{heading}</Text>
        <TextStrong>${price}</TextStrong>
        <TextSmall>{description}</TextSmall>
      </Flex>
    </Card>
  );
}

export type ReviewCardProps = {
  /**
   * The number of stars (1-5)
   */
  stars: number;
  /**
   * The title of the review
   */
  title: string;
  /**
   * The review
   */
  body: string;
  /**
   * The name of the reviewer
   */
  name: string;
  /**
   * The date of the review
   */
  date: string;
  /**
   * The avatar src
   */
  src?: AvatarProps["src"];
};

/**
 * A card demonstrating a statistic or metric
 */
export function ReviewCard({
  stars,
  title,
  body,
  name,
  date,
  src,

  ...props
}: ReviewCardProps) {
  return (
    <Card {...props} direction="vertical" variant="stroke">
      <Flex gap="100">
        {new Array(stars).fill(0).map((_, i) => (
          <IconStar key={i} />
        ))}
      </Flex>
      <Flex direction="column" gap="100">
        <TextHeading>{title}</TextHeading>
        <TextSmall>{body}</TextSmall>
      </Flex>
      <AvatarBlock title={name} description={date}>
        <Avatar size="large" src={src} initials={name.charAt(0)} />
      </AvatarBlock>
    </Card>
  );
}

export type StatsCardProps = {
  /**
   * The icon
   */
  icon?: ReactNode;
  /**
   * The stat
   */
  stat: string;
  /**
   * The description
   */
  description: string;
};

/**
 * A card demonstrating a statistic or metric
 */
export function StatsCard({
  icon,
  stat,
  description,
  ...props
}: StatsCardProps) {
  return (
    <Card {...props} direction="vertical" variant="stroke" align="center">
      {icon}
      <Flex direction="column" alignSecondary="center" gap="100">
        <TextHeading>{stat}</TextHeading>
        {description && <TextSmall>{description}</TextSmall>}
      </Flex>
    </Card>
  );
}

export type TestimonialCardProps = {
  /**
   * The testimonial quote
   */
  heading: string;
  /**
   * The name of the author
   */
  name: string;
  /**
   * The username of the author
   */
  username: string;
  /**
   * The initials of the author
   */
  initials?: AvatarProps["initials"];
  /**
   * An image url for the author
   */
  src?: AvatarProps["src"];
};

/**
 * A card demonstrating a quotation from someone
 */
export function TestimonialCard({
  heading,
  name,
  username,
  initials,
  src,
  ...props
}: TestimonialCardProps) {
  return (
    <Card {...props} direction="vertical" variant="stroke">
      <TextHeading>{heading}</TextHeading>
      <AvatarBlock title={name} description={`@${username}`}>
        <Avatar size="large" src={src} initials={initials} />
      </AvatarBlock>
    </Card>
  );
}
