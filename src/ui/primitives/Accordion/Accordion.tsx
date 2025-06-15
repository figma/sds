import clsx from "clsx";
import { IconChevronDown } from "icons";
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
  type DisclosureGroupProps,
  type DisclosureProps,
} from "react-aria-components";
import "./accordion.css";

export type AccordionProps = DisclosureGroupProps;
export function Accordion({ className, ...props }: AccordionProps) {
  const classNames = clsx(className, "accordion");
  return <DisclosureGroup className={classNames} {...props} />;
}

export type AccordionItemProps = DisclosureProps & { title: string };
export function AccordionItem({
  className,
  title,
  isExpanded,
  isDisabled,
  children,
  ...props
}: AccordionItemProps) {
  const classNames = clsx(className, "accordion-item");
  return (
    <Disclosure className={classNames} {...props}>
      <Heading className="accordion-item-title">
        <Button slot="trigger">
          {title}
          <span
            role="img"
            aria-hidden="true"
            aria-label="accordion item indicator"
            className="accordion-item-indicator"
          >
            <IconChevronDown size="20" />
          </span>
        </Button>
      </Heading>
      <DisclosurePanel className="accordion-item-content">
        <>{children}</>
      </DisclosurePanel>
    </Disclosure>
  );
}
