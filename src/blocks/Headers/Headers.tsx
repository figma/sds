import clsx from "clsx";
import { IconMenu, IconX } from "icons";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  FlexItem,
  IconButton,
  Logo,
  Navigation,
  NavigationItem,
  Section,
  type SectionProps,
} from "ui";

function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <Flex
      direction="column"
      gap="md"
      alignPrimary="center"
      alignSecondary="center"
    >
      <FlexItem>
        <Flex alignPrimary="center">
          <IconButton
            variant="subtle"
            aria-label="Toggle navigation menu"
            onPress={() => setOpen(!open)}
            className="display-flex-to-none"
          >
            {open ? <IconX /> : <IconMenu />}
          </IconButton>
        </Flex>
      </FlexItem>
      <Navigation className={clsx({ "display-none-to-flex": !open })}>
        <NavigationItem isSelected>Home</NavigationItem>
        <NavigationItem>About</NavigationItem>
      </Navigation>
    </Flex>
  );
}

export type StandardHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function StandardHeader({ className, ...props }: StandardHeaderProps) {
  return (
    <Section elementType="header" variant="stroke" padding="sm" {...props}>
      <Flex container>
        <FlexItem size="minor">
          <Logo />
        </FlexItem>
        <FlexItem size="major">
          <Flex gap="xl" alignPrimary="end">
            <HeaderNavigation />
            <ButtonGroup>
              <Button variant="secondary">Log in</Button>
              <Button>Register</Button>
            </ButtonGroup>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
export type VerticalHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function VerticalHeader({ className, ...props }: VerticalHeaderProps) {
  return (
    <Section elementType="header" variant="subtle" padding="sm" {...props}>
      <Flex direction="column" alignSecondary="center" gap="md">
        <Flex alignPrimary="center">
          <Logo />
        </Flex>
        <Flex alignPrimary="center">
          <HeaderNavigation />
        </Flex>
      </Flex>
    </Section>
  );
}
