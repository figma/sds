import clsx from "clsx";
import { IconChevronDown, IconMenu, IconX } from "icons";
import { AuthenticationContext } from "providers";
import { useContext, useState } from "react";
import {
  Avatar,
  AvatarBlock,
  Button,
  ButtonGroup,
  Description,
  Dialog,
  DialogModal,
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
import { AnchorOrButton } from "ui/utils/AnchorOrButton";
import "./headers.css";

export function HeaderAuth() {
  const { currentUser, login, logout } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);

  const userButtons = (
    <>
      <Button
        variant="subtle"
        size="small"
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
        size="small"
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
    </>
  );

  return (
    <>
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
              onPress={() => setOpen(true)}
            >
              <IconMenu />
            </IconButton>
          </Flex>
        </FlexItem>
        <FlexItem className="display-none-to-flex">
          <Flex gap="lg" alignSecondary="center">
            <Navigation>
              <NavigationItem isSelected>Pricing</NavigationItem>
              <NavigationItem>Solutions</NavigationItem>
              <NavigationItem>Community</NavigationItem>
              <NavigationItem>Resources</NavigationItem>
              <NavigationItem>Pricing</NavigationItem>
              <NavigationItem>Contact</NavigationItem>
            </Navigation>
            {currentUser ? (
              <MenuTrigger>
                <AnchorOrButton className={clsx("header-auth-avatar-button")}>
                  <Avatar
                    src={currentUser.avatar}
                    initials={currentUser.name.charAt(0)}
                  />
                  <IconChevronDown />
                </AnchorOrButton>
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
              <ButtonGroup>{userButtons}</ButtonGroup>
            )}
          </Flex>
        </FlexItem>
      </Flex>
      <DialogModal isOpen={open}>
        <Dialog className={clsx("navigation-dialog")}>
          <IconButton
            className={clsx("navigation-dialog-close")}
            variant="subtle"
            aria-label="Close navigation menu"
            onPress={() => setOpen(false)}
          >
            <IconX />
          </IconButton>
          <Flex direction="column" alignPrimary="space-between">
            <Navigation>
              <NavigationItem isSelected>Pricing</NavigationItem>
              <NavigationItem>Solutions</NavigationItem>
              <NavigationItem>Community</NavigationItem>
              <NavigationItem>Resources</NavigationItem>
              <NavigationItem>Pricing</NavigationItem>
              <NavigationItem>Contact</NavigationItem>
            </Navigation>
            {currentUser ? (
              <Flex alignSecondary="center" gap="sm" direction="column">
                <FlexItem>
                  <Flex alignPrimary="center">
                    <Avatar
                      src={currentUser.avatar}
                      initials={currentUser.name.charAt(0)}
                    />
                  </Flex>
                </FlexItem>
                <FlexItem>
                  <Flex alignPrimary="center">
                    <Label>{currentUser.name}</Label>
                  </Flex>
                </FlexItem>
                <FlexItem>
                  <Flex alignPrimary="center">
                    <Button variant="subtle" size="small" onPress={logout}>
                      Log out
                    </Button>
                  </Flex>
                </FlexItem>
              </Flex>
            ) : (
              <ButtonGroup align="center">{userButtons}</ButtonGroup>
            )}
          </Flex>
        </Dialog>
      </DialogModal>
    </>
  );
}

export type HeaderProps = Omit<SectionProps, "variant" | "padding">;
export function Header({ className, ...props }: HeaderProps) {
  return (
    <Section
      className="header"
      elementType="header"
      variant="stroke"
      padding="sm"
      {...props}
    >
      <Flex container alignPrimary="space-between" alignSecondary="center">
        <FlexItem size="minor">
          <Logo />
        </FlexItem>
        <FlexItem size="major">
          <Flex gap="xl" alignPrimary="end" alignSecondary="center">
            <HeaderAuth />
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
export type VerticalHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function VerticalHeader({ className, ...props }: VerticalHeaderProps) {
  return (
    <Section
      className="header"
      elementType="header"
      variant="subtle"
      padding="sm"
      {...props}
    >
      <Flex direction="column" alignSecondary="center" gap="md">
        <Flex alignPrimary="center">
          <Logo />
        </Flex>
        <Flex alignPrimary="center">
          <HeaderAuth />
        </Flex>
      </Flex>
    </Section>
  );
}
