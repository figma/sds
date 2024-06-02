import clsx from "clsx";
import {
  OverlayArrow as RACOverlayArrow,
  Popover as RACPopover,
  type OverlayArrowProps as RACOverlayArrowProps,
  type PopoverProps as RACPopoverProps,
} from "react-aria-components";
import { Dialog } from "ui/primitives";
import "./popover.css";

export interface PopoverProps extends Omit<RACPopoverProps, "children"> {
  children: React.ReactNode;
}

export function Popover({ children, className, ...props }: PopoverProps) {
  const classNames = clsx(className, "popover");
  return (
    <RACPopover className={classNames} {...props}>
      <PopoverOverlayArrow />
      <Dialog>{children}</Dialog>
    </RACPopover>
  );
}

export type PopoverOverlayArrowProps = RACOverlayArrowProps;
export function PopoverOverlayArrow({
  className,
  ...props
}: PopoverOverlayArrowProps) {
  const classNames = clsx(className, "popover-overlay-arrow");
  return (
    <RACOverlayArrow {...props} className={classNames}>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </RACOverlayArrow>
  );
}
