import clsx from "clsx";
import { useAuth } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronDown, IconMenu, IconX } from "icons";
import { Flex, FlexItem, Section, type SectionProps } from "layout";
import {
  Avatar,
  AvatarBlock,
  Button,
  ButtonGroup,
  Dialog,
  DialogModal,
  IconButton,
  Label,
  Logo,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  Navigation,
  NavigationPill,
} from "primitives";
import { useState } from "react";
import { AnchorOrButton } from "utils";
import "./headers.css";

export function HeaderAuth() {
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("pricing");

  const userButtons = (
    <>
      <Button
        variant="subtle"
        size="small"
        onPress={() =>
          login({
            email: "Charlie Brown",
            password: "snooptroupe",
          })
        }
      >
        Log in
      </Button>
      <Button
        size="small"
        onPress={() =>
          login({
            email: "Charlie Brown",
            password: "snooptroupe",
          })
        }
      >
        Register
      </Button>
    </>
  );

  const { isTabletDown } = useMediaQuery();

  const navItems = [
    "Pricing",
    "Solutions",
    "Community",
    "Resources",
    "Contact",
  ];

  const navigation = (
    <Navigation direction={isTabletDown ? "column" : "row"}>
      {navItems.map((item) => (
        <NavigationPill
          key={item}
          onPress={() => setPage(item.toLowerCase())}
          isSelected={page === item.toLowerCase()}
        >
          {item}
        </NavigationPill>
      ))}
    </Navigation>
  );

  return (
    <Flex
      direction="column"
      gap="300"
      alignPrimary="center"
      alignSecondary="center"
    >
      <FlexItem>
        {isTabletDown ? (
          <Flex alignPrimary="center">
            <IconButton
              variant="subtle"
              aria-label="Toggle navigation menu"
              onPress={() => setOpen(true)}
            >
              <IconMenu />
            </IconButton>
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
                <Flex
                  direction="column"
                  alignPrimary="space-between"
                  alignSecondary="center"
                >
                  {navigation}
                  {user ? (
                    <Flex alignSecondary="center" gap="200" direction="column">
                      <FlexItem>
                        <Flex alignPrimary="center">
                          <Avatar
                            src={user.avatar}
                            initials={user.name.charAt(0)}
                          />
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <Flex alignPrimary="center">
                          <Label>{user.name}</Label>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <Flex alignPrimary="center">
                          <Button
                            variant="subtle"
                            size="small"
                            onPress={logout}
                          >
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
          </Flex>
        ) : (
          <Flex gap="400" alignSecondary="center">
            {navigation}
            {user ? (
              <MenuTrigger>
                <AnchorOrButton className={clsx("header-auth-avatar-button")}>
                  <Avatar src={user.avatar} initials={user.name.charAt(0)} />
                  <IconChevronDown />
                </AnchorOrButton>
                <MenuPopover placement="bottom right">
                  <Menu>
                    <MenuItem>
                      <AvatarBlock title={user.name} description="View profile">
                        <Avatar
                          src={user.avatar}
                          initials={user.name.charAt(0)}
                        />
                      </AvatarBlock>
                    </MenuItem>
                    <MenuItem onAction={logout}>Log out</MenuItem>
                  </Menu>
                </MenuPopover>
              </MenuTrigger>
            ) : (
              <ButtonGroup className={clsx("header-auth-avatar-button")}>
                {userButtons}
              </ButtonGroup>
            )}
          </Flex>
        )}
      </FlexItem>
    </Flex>
  );
}

export type HeaderProps = Omit<SectionProps, "variant" | "padding" | "src">;
export function Header({ className, ...props }: HeaderProps) {
  return (
    <Section
      className="header"
      elementType="header"
      variant="stroke"
      padding={"800"}
      {...props}
    >
      <Flex container alignPrimary="space-between" alignSecondary="center">
        <FlexItem size="minor">
          <Logo />
        </FlexItem>
        <FlexItem size="major">
          <Flex gap="600" alignPrimary="end" alignSecondary="center">
            <HeaderAuth />
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
