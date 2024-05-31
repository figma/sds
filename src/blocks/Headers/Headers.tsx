import clsx from "clsx";
import { IconMenu, IconX } from "icons";
import { AuthenticationContext } from "providers";
import { useContext, useState } from "react";
import {
  Avatar,
  AvatarBlock,
  AvatarButton,
  Button,
  ButtonGroup,
  Description,
  Flex,
  FlexItem,
  IconButton,
  Label,
  Logo,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  Navigation,
  NavigationItem,
  Section,
  type SectionProps,
} from "ui";

function HeaderUser() {
  const { currentUser, login, logout } = useContext(AuthenticationContext);
  return currentUser ? (
    <MenuTrigger>
      <AvatarButton
        src={currentUser.avatar}
        initials={currentUser.name.charAt(0)}
      />
      <MenuPopover placement="bottom right">
        <Menu>
          <MenuItem>
            <AvatarBlock>
              <Avatar
                src={currentUser.avatar}
                initials={currentUser.name.charAt(0)}
              />
              <Label>{currentUser.name}</Label>
              <Description>View profile</Description>
            </AvatarBlock>
          </MenuItem>
          <MenuItem onAction={logout}>Log out</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ) : (
    <ButtonGroup>
      <Button
        variant="secondary"
        size="sm"
        onPress={() =>
          login({
            avatar: "https://picsum.photos/300",
            name: "Charlie Brown",
            username: "snooptroupe",
          })
        }
      >
        Log in
      </Button>
      <Button
        size="sm"
        onPress={() =>
          login({
            avatar: "https://picsum.photos/300",
            name: "Charlie Brown",
            username: "snooptroupe",
          })
        }
      >
        Register
      </Button>
    </ButtonGroup>
  );
}

function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <Flex
      direction="column"
      gap="md"
      alignPrimary="center"
      alignSecondary="center"
    >
      <FlexItem className="display-flex-to-none">
        <Flex alignPrimary="center">
          <IconButton
            variant="subtle"
            aria-label="Toggle navigation menu"
            onPress={() => setOpen(!open)}
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
      <Flex container alignPrimary="space-between" alignSecondary="center">
        <FlexItem size="minor">
          <Logo />
        </FlexItem>
        <FlexItem size="major">
          <Flex gap="xl" alignPrimary="end" alignSecondary="center">
            <HeaderNavigation />
            <HeaderUser />
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
          <HeaderUser />
        </Flex>
      </Flex>
    </Section>
  );
}
