import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import {
  Avatar,
  AvatarBlock,
  AvatarProps,
  Button,
  ButtonGroup,
  Description,
  Label,
  Text,
  TextHeading,
  TextList,
  TextListItem,
  TextTitlePage,
} from "ui";
import { AnchorOrButton, AnchorOrButtonProps } from "ui/utils/AnchorOrButton";
import "./cards.css";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
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
  children,
  className,
  direction = "vertical",
  interactionProps,
  variant = "default",
  asset,
  ...props
}: CardProps) {
  const classNames = clsx(
    className,
    "card",
    `card-direction-${direction}`,
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
   * A list of items to appear in a bulleted list
   */
  items: string[];
  /**
   * The text labeling the action button
   */
  action: string;
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
  onAction,
  items,
  price,
  ...props
}: PricingCardProps) {
  return (
    <Card {...props} direction="vertical" variant="stroke">
      <TextHeading>{heading}</TextHeading>
      <TextTitlePage>
        ${price}
        <Text elementType="span"> / per month</Text>
      </TextTitlePage>
      <TextList>
        {items.map((item) => (
          <TextListItem key={item}>{item}</TextListItem>
        ))}
      </TextList>
      <ButtonGroup align="justify">
        <Button onPress={onAction}>{action}</Button>
      </ButtonGroup>
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
   * The text labeling the action button
   */
  action: string;
  /**
   * The action for the button
   */
  onAction: () => void;
};

/**
 * A card that demonstrates product information with a CTA
 */
export function ProductInfoCard({
  asset,
  heading,
  price,
  action,
  onAction,
  ...props
}: ProductInfoCardProps) {
  return (
    <Card {...props} direction="horizontal" variant="stroke" asset={asset}>
      <TextHeading>{heading}</TextHeading>
      <TextTitlePage>${price}</TextTitlePage>
      <ButtonGroup align="start">
        <Button variant="neutral" onPress={onAction}>
          {action}
        </Button>
      </ButtonGroup>
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
      <AvatarBlock>
        <Avatar size="lg" src={src} initials={initials} />
        <Label>{name}</Label>
        <Description>@{username}</Description>
      </AvatarBlock>
    </Card>
  );
}
