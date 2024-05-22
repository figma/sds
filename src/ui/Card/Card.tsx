import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { AnchorOrButton, AnchorOrButtonProps } from "ui/utils/AnchorOrButton";
import "./card.css";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  direction?: "horizontal" | "vertical";
  interaction?: Omit<AnchorOrButtonProps, "aria-label"> & {
    "aria-label": string;
  };
  media?: React.ReactNode;
  variant?: "default" | "padded";
};
export function Card({
  children,
  className,
  direction = "vertical",
  interaction,
  variant = "default",
  media,
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
      {media && <div className="card-media">{media}</div>}
      <div className="card-content">{children}</div>
      {interaction && (
        <AnchorOrButton className="card-interaction" {...interaction} />
      )}
    </div>
  );
}
