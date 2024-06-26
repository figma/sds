import figma from "@figma/code-connect";
import { Hero } from "compositions";
import { placeholder } from "images";

figma.connect(Hero, "<FIGMA_SECTIONS_HERO_BASIC>", {
  props: {
    children: figma.children(["Text Content Title"]),
  },
  example: ({ children }) => <Hero variant="subtle">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_SECTIONS_HERO_ACTIONS>", {
  props: {
    children: figma.children(["Text Content Title", "Button Group"]),
  },
  example: ({ children }) => <Hero variant="subtle">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_SECTIONS_HERO_NEWSLETTER>", {
  props: {
    children: figma.children(["Text Content Title", "Form Newsletter"]),
  },
  example: ({ children }) => <Hero variant="subtle">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_SECTIONS_HERO_FORM>", {
  props: {
    children: figma.children(["Text Content Title", "Form Contact"]),
  },
  example: ({ children }) => <Hero variant="subtle">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_SECTIONS_HERO_IMAGE>", {
  props: {
    children: figma.children(["Text Content Title", "Button Group"]),
  },
  example: ({ children }) => (
    <Hero variant="image" src={placeholder}>
      {children}
    </Hero>
  ),
});
