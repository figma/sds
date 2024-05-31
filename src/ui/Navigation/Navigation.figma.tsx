import { figma } from "@figma/code-connect";
import { Navigation, NavigationItem } from "./Navigation";

figma.connect(Navigation, "<FIGMA_URL_NAVIGATION>", {
  props: { children: figma.children("Navigation Item") },
  example: ({ children }) => <Navigation>{children}</Navigation>,
});

figma.connect(NavigationItem, "<FIGMA_URL_NAVIGATION_ITEM>", {
  props: {
    text: figma.string("Text"),
    isSelected: figma.enum("State", {
      On: true,
      Off: undefined,
    }),
  },
  example: ({ text, isSelected }) => (
    <NavigationItem isSelected={isSelected}>{text}</NavigationItem>
  ),
});
