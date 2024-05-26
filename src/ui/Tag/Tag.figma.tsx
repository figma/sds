import figma from "@figma/code-connect";
import { Label } from "../Fieldset/Fieldset";
import { Tag, TagToggle, TagToggleGroup, TagToggleList } from "./Tag";

const FIGMA_URL_TAG =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=56-8830";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=26-9307"
const FIGMA_URL_TAG_TOGGLE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=157-10316&t=Rnfd6fBILKf5apxJ-11";
const FIGMA_URL_TAG_TOGGLE_GROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=157-10352&t=Rnfd6fBILKf5apxJ-11";

figma.connect(Tag, FIGMA_URL_TAG, {
  props: {
    onRemove: figma.boolean("Is Removable", {
      true: true, // TODO: this needs to be a function.
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
  example: ({ label, scheme, variant }) => (
    <Tag variant={variant} scheme={scheme}>
      {label}
    </Tag>
  ),
});

figma.connect(TagToggle, FIGMA_URL_TAG_TOGGLE, {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <TagToggle id={label}>{label}</TagToggle>,
});

figma.connect(TagToggleGroup, FIGMA_URL_TAG_TOGGLE_GROUP, {
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
