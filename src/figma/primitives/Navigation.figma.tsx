import { figma } from "@figma/code-connect";
import { Navigation, NavigationButton, NavigationPill } from "primitives";

figma.connect(Navigation, "<FIGMA_NAVIGATION_NAVIGATION_PILL_LIST>", {
  props: {
    children: figma.children("Navigation Pill"),
    direction: figma.enum("Direction", {
      Row: "row",
      Column: "column",
    }),
  },
  example: ({ children, ...props }) => (
    <Navigation {...props}>{children}</Navigation>
  ),
});

figma.connect(NavigationPill, "<FIGMA_NAVIGATION_NAVIGATION_PILL>", {
  props: {
    label: figma.string("Label"),
    isSelected: figma.enum("State", {
      Active: true,
      Default: undefined,
      Hover: undefined,
    }),
  },
  example: ({ label, ...props }) => (
    <NavigationPill {...props}>{label}</NavigationPill>
  ),
});

figma.connect(Navigation, "<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>", {
  props: {
    children: figma.children("Navigation Button"),
    direction: figma.enum("Direction", {
      Row: "row",
      Column: "column",
    }),
  },
  example: ({ children, ...props }) => (
    <Navigation {...props}>{children}</Navigation>
  ),
});

figma.connect(NavigationButton, "<FIGMA_NAVIGATION_NAVIGATION_BUTTON>", {
  props: {
    label: figma.string("Label"),
    icon: figma.boolean("Has Icon", {
      true: figma.instance("Icon"),
      false: undefined,
    }),
    isSelected: figma.enum("State", {
      Active: true,
      Default: undefined,
      Hover: undefined,
    }),
  },
  example: ({ label, ...props }) => (
    <NavigationButton {...props}>{label}</NavigationButton>
  ),
});
