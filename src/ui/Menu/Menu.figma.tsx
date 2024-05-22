import figma from "@figma/code-connect";
import {
  Menu,
  MenuDescription,
  MenuHeader,
  MenuHeading,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuShortcut,
} from "./Menu";

const FIGMA_URL_MENU_MENU =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:720";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8730"
const FIGMA_URL_MENU_SECTION =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:733";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8745"
const FIGMA_URL_MENU_HEADING =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:760";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-9191"
const FIGMA_URL_MENU_DESCRIPTION =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:737";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-9096"
const FIGMA_URL_MENU_LABEL =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:741";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8858"
const FIGMA_URL_MENU_SHORTCUT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:739";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-9012"
const FIGMA_URL_MENU_ITEM =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:743";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-9142"
const FIGMA_URL_MENU_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:728";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8736"
const FIGMA_URL_MENU_SEPARATOR =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:731";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8741"

figma.connect(Menu, FIGMA_URL_MENU_MENU, {
  props: {
    children: figma.children([
      "Menu Header",
      "Menu Separator",
      "Menu Heading",
      "Menu Section",
      "Menu Item",
    ]),
  },
  example: ({ children }) => <Menu>{children}</Menu>,
});

figma.connect(MenuSection, FIGMA_URL_MENU_SECTION, {
  props: { children: figma.children("Menu Item") },
  example: ({ children }) => <MenuSection>{children}</MenuSection>,
});

figma.connect(MenuHeading, FIGMA_URL_MENU_HEADING, {
  props: { heading: figma.string("Heading") },
  example: ({ heading }) => <MenuHeading>{heading}</MenuHeading>,
});

figma.connect(MenuDescription, FIGMA_URL_MENU_DESCRIPTION, {
  props: { description: figma.string("Description") },
  example: ({ description }) => (
    <MenuDescription>{description}</MenuDescription>
  ),
});

figma.connect(MenuLabel, FIGMA_URL_MENU_LABEL, {
  props: { label: figma.string("Label") },
  example: ({ label }) => <MenuLabel>{label}</MenuLabel>,
});

figma.connect(MenuShortcut, FIGMA_URL_MENU_SHORTCUT, {
  props: { shortcut: figma.string("Shortcut") },
  example: ({ shortcut }) => <MenuShortcut>{shortcut}</MenuShortcut>,
});

figma.connect(MenuItem, FIGMA_URL_MENU_ITEM, {
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

figma.connect(MenuHeader, FIGMA_URL_MENU_HEADER, {
  props: {
    header: figma.string("Header"),
    subhead: figma.string("Subhead"),
  },
  example: ({ header, subhead }) => (
    <MenuHeader>
      <h3>{subhead}</h3>
      <h2>{header}</h2>
    </MenuHeader>
  ),
});

figma.connect(MenuSeparator, FIGMA_URL_MENU_SEPARATOR);
