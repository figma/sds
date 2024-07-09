import figma from "@figma/code-connect";
import {
  Label,
  Tag,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
} from "primitives";

figma.connect(Tag, "<FIGMA_TAGS_TAG>", {
  props: {
    onRemove: figma.boolean("Removable", {
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
  example: ({ label, ...props }) => <Tag {...props}>{label}</Tag>,
});

figma.connect(TagToggle, "<FIGMA_TAGS_TAG_TOGGLE>", {
  props: {
    label: figma.string("Label"),
    iconStart: figma.instance("Icon"),
  },
  example: ({ label, ...props }) => (
    <TagToggle id={label} {...props}>
      {label}
    </TagToggle>
  ),
});

figma.connect(TagToggleGroup, "<FIGMA_TAGS_TAG_TOGGLE_GROUP>", {
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
