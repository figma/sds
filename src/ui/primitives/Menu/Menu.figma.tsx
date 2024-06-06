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
} from "./Menu";

figma.connect(Menu, "<FIGMA_URL_MENU_MENU>", {
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

figma.connect(MenuHeading, "<FIGMA_URL_MENU_HEADING>", {
  props: { heading: figma.children("Text Strong") },
  example: ({ heading }) => <MenuHeading>{heading}</MenuHeading>,
});

figma.connect(MenuDescription, "<FIGMA_URL_MENU_DESCRIPTION>", {
  props: { description: figma.string("Description") },
  example: ({ description }) => (
    <MenuDescription>{description}</MenuDescription>
  ),
});

figma.connect(MenuLabel, "<FIGMA_URL_MENU_LABEL>", {
  props: { label: figma.string("Label") },
  example: ({ label }) => <MenuLabel>{label}</MenuLabel>,
});

figma.connect(MenuShortcut, "<FIGMA_URL_MENU_SHORTCUT>", {
  props: { shortcut: figma.string("Shortcut") },
  example: ({ shortcut }) => <MenuShortcut>{shortcut}</MenuShortcut>,
});

figma.connect(MenuItem, "<FIGMA_URL_MENU_ITEM>", {
  props: {
    icon: figma.boolean("Has Icon", {
      true: figma.instance("Icon"),
      false: undefined,
    }),
    description: figma.boolean("Has Description", {
      true: figma.children("Menu Description"),
      false: undefined,
    }),
    shortcut: figma.boolean("Has Shortcut", {
      true: figma.children("Menu Shortcut"),
      false: undefined,
    }),
    label: figma.children("Menu Label"),
  },
  example: ({ icon, label, description, shortcut }) => (
    <MenuItem>
      {icon}
      {label}
      {shortcut}
      {description}
    </MenuItem>
  ),
});

figma.connect(MenuHeader, "<FIGMA_URL_MENU_HEADER>", {
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

figma.connect(MenuSeparator, "<FIGMA_URL_MENU_SEPARATOR>");
