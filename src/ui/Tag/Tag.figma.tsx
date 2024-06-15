import figma from "@figma/code-connect";
import { Label } from "../Fieldset/Fieldset";
import { Tag, TagToggle, TagToggleGroup, TagToggleList } from "./Tag";

figma.connect(Tag, "<FIGMA_URL_TAG>", {
  props: {
    onRemove: figma.boolean("Is Removable", {
      // @ts-expect-error
      true: () => {},
      false: undefined,
    }),
    label: figma.string("Label"),
    variant: figma.enum("Variant", {
      Secondary: "secondary",
    }),
    scheme: figma.enum("Scheme", {
      Danger: "danger",
      Positive: "positive",
      Warning: "warning",
      Neutral: "neutral",
    }),
  },
  example: ({ label, scheme, onRemove, variant }) => (
    // @ts-expect-error
    <Tag variant={variant} scheme={scheme} onRemove={onRemove}>
      {label}
    </Tag>
  ),
});

figma.connect(TagToggle, "<FIGMA_URL_TAG_TOGGLE>", {
  props: {
    label: figma.string("Label"),
    iconStart: figma.instance("Icon"),
  },
  example: ({ label, iconStart }) => (
    <TagToggle id={label} iconStart={iconStart}>
      {label}
    </TagToggle>
  ),
});

figma.connect(TagToggleGroup, "<FIGMA_URL_TAG_TOGGLE_GROUP>", {
  props: {
    children: figma.children("Tag Toggle"),
  },
  example: ({ children }) => (
    <TagToggleGroup>
      <Label>Label this!</Label>
      <TagToggleList>{children}</TagToggleList>
    </TagToggleGroup>
  ),
});
