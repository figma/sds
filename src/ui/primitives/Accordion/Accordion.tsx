import {
  AccordionItemAriaProps,
  AriaAccordionProps,
  useAccordion,
  useAccordionItem,
} from "@react-aria/accordion";
import { useFocus, useFocusVisible, useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { Item } from "@react-stately/collections";
import { TreeState, useTreeState } from "@react-stately/tree";
import clsx from "clsx";
import { IconChevronDown, IconChevronUp } from "icons";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import "./accordion.css";

// TODO: This file is WIP. There is no direct support for Accordion in react-aria-components,
// so we are making our own here using react-aria

type RawAccordionProps<T> = AriaAccordionProps<T> &
  ComponentPropsWithoutRef<"div">;
function RawAccordion<T extends object>({
  className,
  ...props
}: RawAccordionProps<T>) {
  const domRef = useRef<HTMLDivElement>(null);
  const state = useTreeState<T>(props);
  const { accordionProps } = useAccordion(props, state, domRef);

  return (
    <div ref={domRef} className={className} {...accordionProps}>
      {[...state.collection].map((item) => (
        <RawAccordionItem<T> key={item.key} item={item} state={state} />
      ))}
    </div>
  );
}

type RawAccordionItemProps<T> = AccordionItemAriaProps<T> & {
  state: TreeState<T>;
};
function RawAccordionItem<T extends object>({
  ...props
}: RawAccordionItemProps<T>) {
  const domRef = useRef<HTMLButtonElement>(null);
  const { state, item } = props;
  const { buttonProps, regionProps } = useAccordionItem(props, state, domRef);

  const isDisabled = state.disabledKeys.has(item.key);
  const { isFocusVisible } = useFocusVisible();
  const [isFocused, setIsFocused] = useState(false);
  const { focusProps } = useFocus({
    isDisabled,
    onFocusChange: setIsFocused,
  });
  const { isHovered, hoverProps } = useHover({ isDisabled });
  const isSelected = state.expandedKeys.has(item.key);

  return (
    <div
      className="accordion-item"
      data-selected={isSelected || undefined}
      data-disabled={isDisabled || undefined}
    >
      <h2 className="accordion-item-title">
        <button
          {...mergeProps(buttonProps, hoverProps, focusProps)}
          ref={domRef}
          data-hovered={isHovered || undefined}
          data-focus-visible={(isFocused && isFocusVisible) || undefined}
          data-disabled={isDisabled || undefined}
        >
          {item.props.title}
          <span
            role="img"
            aria-hidden="true"
            aria-label="accordion item indicator"
            className="accordion-item-indicator"
          >
            {isSelected ? (
              <IconChevronUp size="20" />
            ) : (
              <IconChevronDown size="20" />
            )}
            ️
          </span>
        </button>
      </h2>
      <div {...regionProps} className="accordion-item-content">
        {item.props.children}
      </div>
    </div>
  );
}

export type AccordionProps<T> = RawAccordionProps<T>;
export function Accordion<T extends object>({
  className,
  ...props
}: AccordionProps<T>) {
  const classNames = clsx(className, "accordion");
  return <RawAccordion className={classNames} {...props} />;
}

export const AccordionItem = Item;
// export type AccordionItemProps<T> = {
//   key?: string;
//   label: string;
//   children: React.ReactNode;
// } & ItemProps<T>;
// export function AccordionItem<T extends object>({
//   key,
//   label,
//   ...props
// }: AccordionItemProps<T>) {
//   return <Item key={key || label} {...props} />;
// }

// TODO: need to wrap Item in a vanity component, but its problematic.
// https://github.com/adobe/react-spectrum/blob/d80999e897b4d4db9fcfb4e9b8fcdc9fdd700882/packages/%40react-spectrum/accordion/stories/Accordion.stories.tsx
// https://github.com/adobe/react-spectrum/issues/2746#issuecomment-1323575490
// https://github.com/adobe/react-spectrum/issues/2746#issuecomment-1598867906
