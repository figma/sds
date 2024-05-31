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
import "./card.css";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  direction?: "horizontal" | "vertical";
  interaction?: Omit<AnchorOrButtonProps, "aria-label"> & {
    "aria-label": string;
  };
  asset?: React.ReactNode;
  variant?: "default" | "stroke" | "padded";
};
export function Card({
  children,
  className,
  direction = "vertical",
  interaction,
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
      {interaction && (
        <AnchorOrButton className="card-interaction" {...interaction} />
      )}
    </div>
  );
}

export type PricingCardProps = {
  heading: string;
  price: number;
  items: string[];
  action: string;
  onAction: () => void;
};
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
  heading: string;
  price: number;
  action: string;
  onAction: () => void;
};
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
        <Button variant="secondary" onPress={onAction}>
          {action}
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export type TestimonialCardProps = {
  heading: string;
  name: string;
  username: string;
  initials?: AvatarProps["initials"];
  src?: AvatarProps["src"];
};
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
