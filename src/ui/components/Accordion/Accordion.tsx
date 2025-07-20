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
import css from "./Accordion.module.css";

export type AccordionProps = DisclosureGroupProps;
export function Accordion({ ...props }: AccordionProps) {
  return <DisclosureGroup className={css.accordion} {...props} />;
}

export type AccordionItemProps = DisclosureProps & {
  title: string;
  indicatorLabel?: string;
};
export function AccordionItem({
  title,
  isExpanded,
  isDisabled,
  children,
  indicatorLabel = "accordion item indicator",
  ...props
}: AccordionItemProps) {
  return (
    <Disclosure className={css.item} {...props}>
      <Heading className={css.title}>
        <Button slot="trigger">
          {title}
          <span
            role="img"
            aria-hidden="true"
            aria-label={indicatorLabel}
            className={css.indicator}
          >
            <IconChevronDown size="20" />
          </span>
        </Button>
      </Heading>
      <DisclosurePanel className={css.content}>
        <>{children}</>
      </DisclosurePanel>
    </Disclosure>
  );
}
