import { Card, type CardProps } from "ui";

export type BasicCardProps = Pick<
  CardProps,
  "children" | "interaction" | "media" | "variant"
>;
export function BasicCard(props: BasicCardProps) {
  return <Card {...props} direction="vertical" />;
}

export type PricingCardProps = Pick<CardProps, "children">;
export function PricingCard(props: PricingCardProps) {
  return <Card {...props} direction="vertical" variant="stroke" />;
}

export type ProductInfoCardProps = Pick<CardProps, "children" | "media">;
export function ProductInfoCard(props: ProductInfoCardProps) {
  return <Card {...props} direction="horizontal" variant="stroke" />;
}

export type TestimonialCardProps = Pick<CardProps, "children">;
export function TestimonialCard(props: TestimonialCardProps) {
  return <Card {...props} direction="vertical" variant="stroke" />;
}
