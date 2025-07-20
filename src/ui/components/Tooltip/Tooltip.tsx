import {
  OverlayArrow as RACOverlayArrow,
  Popover as RACPopover,
  type OverlayArrowProps as RACOverlayArrowProps,
  type PopoverProps as RACPopoverProps,
} from "react-aria-components";
import css from "./Tooltip.module.css";

export interface TooltipProps extends Omit<RACPopoverProps, "children"> {
  children: React.ReactNode;
}

export function Tooltip({ children, offset = 16, ...props }: TooltipProps) {
  return (
    <RACPopover className={css.tooltip} offset={offset} {...props}>
      <TooltipOverlayArrow />
      <TooltipContent>{children}</TooltipContent>
    </RACPopover>
  );
}

export interface TooltipContentProps {
  children: React.ReactNode;
}

export function TooltipContent({ children }: TooltipContentProps) {
  return <div className={css.tooltipContent}>{children}</div>;
}

export type TooltipOverlayArrowProps = RACOverlayArrowProps;
export function TooltipOverlayArrow({ ...props }: TooltipOverlayArrowProps) {
  return (
    <RACOverlayArrow {...props} className={css.overlayArrow}>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </RACOverlayArrow>
  );
}
