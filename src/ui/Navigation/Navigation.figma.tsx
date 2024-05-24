import { figma } from "@figma/code-connect";
import { Navigation, NavigationItem } from "./Navigation";

const FIGMA_URL_NAVIGATION =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4609&t=piSsjqZPlyn7qp8D-11";
const FIGMA_URL_NAVIGATION_ITEM =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7768-19970&t=piSsjqZPlyn7qp8D-11";

figma.connect(Navigation, FIGMA_URL_NAVIGATION, {
  props: { children: figma.children("Navigation Item") },
  example: ({ children }) => <Navigation>{children}</Navigation>,
});

figma.connect(NavigationItem, FIGMA_URL_NAVIGATION_ITEM, {
  props: {
    text: figma.string("Label"),
    isSelected: figma.enum("State", {
      On: true,
      Off: undefined,
    }),
  },
  example: ({ text, isSelected }) => (
    <NavigationItem isSelected={isSelected}>{text}</NavigationItem>
  ),
});
