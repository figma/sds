import clsx from "clsx";
import { useMediaQuery } from "hooks";
import { IconStar } from "icons";
import { Flex } from "layout";
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
  TextPrice,
  TextPriceProps,
  TextSmall,
  TextStrong,
} from "primitives";
import { ComponentPropsWithoutRef, ReactNode } from "react";
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
   * Padding can be none, 600, or 800
   */
  padding?: "600" | "800";
  /**
   * Style variation of the card.
   */
  variant?: "default" | "stroke" | "brand";
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
  padding,
  ...props
}: CardProps) {
  const { isMobile } = useMediaQuery();
  const classNames = clsx(
    className,
    "card",
    `card-align-${align}`,
    `card-direction-${isMobile ? "vertical" : direction}`,
    `card-padding-${padding ? padding : "0"}`,
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
   * The sku for the tier
   */
  sku: string;
  /**
   * The billing interval
   */
  interval: "month" | "year";
  /**
   * The heading for the price point
   */
  heading: string;
  /**
   * The price excluding currency
   */
  price: TextPriceProps["price"];
  /**
   * The price currency
   */
  priceCurrency: TextPriceProps["currency"];
  /**
   * The text for price per
   */
  priceLabel?: TextPriceProps["label"];
  /**
   * Size of the pricing
   */
  size?: TextPriceProps["size"];
  /**
   * Card variant
   */
  variant?: CardProps["variant"];
  /**
   * The text labeling the action button
   */
  action: string;
  /**
   * The action icon
   */
  actionIcon?: ReactNode;
  /**
   * The action variant
   */
  actionVariant?: ButtonProps["variant"];
  /**
   * The action of the button.
   */
  onAction: () => void;
  /**
   * List of items to map to a TextList instance
   */
  list?: string[];
  /**
   * List of items to render as a slot
   */
  listSlot?: ReactNode;
};

/**
 * A card that demonstrates price point and value, often in comparison to other cards.
 */
export function PricingCard({
  heading,
  action,
  actionVariant = "primary",
  actionIcon,
  onAction,
  price,
  priceCurrency,
  priceLabel = "/ mo",
  size = "large",
  variant = "stroke",
  ...props
}: PricingCardProps) {
  return (
    <Card
      {...props}
      variant={variant}
      padding={size === "large" ? "800" : "600"}
      direction="vertical"
    >
      <Flex
        direction={size === "large" ? "column" : "row"}
        alignPrimary={size === "large" ? "center" : "space-between"}
        alignSecondary="center"
        gap={size === "large" ? "400" : undefined}
      >
        <TextHeading>{heading}</TextHeading>
        <TextPrice
          size={size}
          label={priceLabel}
          currency={priceCurrency}
          price={price}
        />
      </Flex>
      {props.list ? (
        <TextList density={size === "large" ? "default" : "tight"}>
          {props.list.map((item) => (
            <TextListItem key={item}>{item}</TextListItem>
          ))}
        </TextList>
      ) : (
        props.listSlot
      )}

      <Flex alignPrimary="stretch">
        <ButtonGroup align="justify">
          <Button variant={actionVariant} onPress={onAction}>
            {action}
            {actionIcon}
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
  price: string;
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
    <Card
      {...props}
      padding="600"
      direction="vertical"
      variant="stroke"
      asset={asset}
    >
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
    <Card {...props} padding="600" direction="vertical" variant="stroke">
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
    <Card
      {...props}
      padding="600"
      direction="vertical"
      variant="stroke"
      align="center"
    >
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
    <Card {...props} padding="600" direction="vertical" variant="stroke">
      <TextHeading>{heading}</TextHeading>
      <AvatarBlock title={name} description={`@${username}`}>
        <Avatar size="large" src={src} initials={initials} />
      </AvatarBlock>
    </Card>
  );
}
