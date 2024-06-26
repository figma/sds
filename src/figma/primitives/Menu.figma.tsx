import figma from "@figma/code-connect";
import {
  Menu,
  MenuDescription,
  MenuHeader,
  MenuHeading,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
} from "primitives";

figma.connect(Menu, "<FIGMA_MENU_MENU>", {
  props: {
    children: figma.children([
      "Menu Header",
      "Menu Separator",
      "Menu Section",
      "Menu Item",
    ]),
  },
  example: ({ children }) => <Menu>{children}</Menu>,
});

figma.connect(MenuHeading, "<FIGMA_MENU_MENU_HEADING>", {
  props: { heading: figma.children("Text Strong") },
  example: ({ heading }) => <MenuHeading>{heading}</MenuHeading>,
});

figma.connect(MenuShortcut, "<FIGMA_MENU_MENU_SHORTCUT>", {
  props: { shortcut: figma.string("Shortcut") },
  example: ({ shortcut }) => <MenuShortcut>{shortcut}</MenuShortcut>,
});

figma.connect(MenuItem, "<FIGMA_MENU_MENU_ITEM>", {
  props: {
    icon: figma.boolean("Has Icon", {
      true: figma.instance("Icon"),
      false: undefined,
    }),
    description: figma.boolean("Has Description", {
      true: <MenuDescription>{figma.string("Description")}</MenuDescription>,
      false: undefined,
    }),
    shortcut: figma.boolean("Has Shortcut", {
      true: figma.children("Menu Shortcut"),
      false: undefined,
    }),
    label: figma.string("Label"),
  },
  example: ({ icon, label, description, shortcut }) => (
    <MenuItem>
      {icon}
      <MenuLabel>{label}</MenuLabel>
      {shortcut}
      {description}
    </MenuItem>
  ),
});

figma.connect(MenuHeader, "<FIGMA_MENU_MENU_HEADER>", {
  props: {
    header: figma.children("Text Strong"),
    subhead: figma.children("Text Small"),
  },
  example: ({ header, subhead }) => (
    <MenuHeader>
      {subhead}
      {header}
    </MenuHeader>
  ),
});

figma.connect(MenuSeparator, "<FIGMA_MENU_MENU_SEPARATOR>");
