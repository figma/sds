// url=<FIGMA_CARDS_REVIEW_CARD>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Cards/Cards.tsx
// component=ReviewCard

import figma from "figma";

const instance = figma.selectedInstance;

const headingLayer = instance.findInstance("Text Heading");
const title =
  headingLayer.type !== "ERROR" ? headingLayer.getString("Text") : undefined;

const bodyLayer = instance.findInstance("Text");
const body =
  bodyLayer.type !== "ERROR" ? bodyLayer.getString("Text") : undefined;

const avatarLayer = instance.findInstance("Avatar Block");
const name =
  avatarLayer.type !== "ERROR" ? avatarLayer.getString("Title") : undefined;
const date =
  avatarLayer.type !== "ERROR"
    ? avatarLayer.getString("Description")
    : undefined;

export default {
  id: "ReviewCard",
  imports: [
    'import { ReviewCard } from "compositions";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<ReviewCard stars={5} src={placeholder} title="${title}" body="${body}" date="${date}" name="${name}"/>`,
  metadata: { nestable: true },
};
