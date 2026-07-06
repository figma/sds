// url=<FIGMA_CARDS_TESTIMONIAL_CARD>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Cards/Cards.tsx
// component=TestimonialCard

import figma from "figma";

const instance = figma.selectedInstance;

const headingLayer = instance.findInstance("Text Heading");
const heading =
  headingLayer.type !== "ERROR" ? headingLayer.getString("Text") : undefined;

const avatarLayer = instance.findInstance("Avatar Block");
const name =
  avatarLayer.type !== "ERROR" ? avatarLayer.getString("Title") : undefined;
const username =
  avatarLayer.type !== "ERROR"
    ? avatarLayer.getString("Description")
    : undefined;

export default {
  id: "TestimonialCard",
  imports: [
    'import { TestimonialCard } from "compositions";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<TestimonialCard heading="${heading}" src={placeholder} name="${name}" username="${username}"/>`,
  metadata: { nestable: true },
};
