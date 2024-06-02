import clsx from "clsx";
import { IconFigma } from "icons";
import {
  AnchorOrButton,
  type AnchorOrButtonProps,
} from "ui/utils/AnchorOrButton";
import "./logo.css";

export type LogoProps = AnchorOrButtonProps;
export function Logo({ className, ...props }: LogoProps) {
  const classNames = clsx(className, "logo");
  return (
    <AnchorOrButton className={classNames} {...props}>
      <IconFigma size="40" />
    </AnchorOrButton>
  );
}
