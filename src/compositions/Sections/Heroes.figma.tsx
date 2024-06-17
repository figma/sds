import figma from "@figma/code-connect";
import { Hero } from "./Heroes";

figma.connect(Hero, "<FIGMA_URL_SECTION_HERO_BASIC>", {
  props: {
    children: figma.children(["Text Content Title"]),
  },
  example: ({ children }) => <Hero variant="secondary">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_URL_SECTION_HERO_ACTIONS>", {
  props: {
    children: figma.children(["Text Content Title", "Button Group"]),
  },
  example: ({ children }) => <Hero variant="secondary">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_URL_SECTION_HERO_NEWSLETTER>", {
  props: {
    children: figma.children(["Text Content Title", "Form Newsletter"]),
  },
  example: ({ children }) => <Hero variant="secondary">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_URL_SECTION_HERO_FORM>", {
  props: {
    children: figma.children(["Text Content Title", "Form Contact"]),
  },
  example: ({ children }) => <Hero variant="secondary">{children}</Hero>,
});
figma.connect(Hero, "<FIGMA_URL_SECTION_HERO_IMAGE>", {
  props: {
    children: figma.children(["Text Content Title", "Button Group"]),
  },
  example: ({ children }) => (
    <Hero
      variant="image"
      src="https://placehold.co/2000x1200/f0f0f0/ddd?text=SDS"
    >
      {children}
    </Hero>
  ),
});