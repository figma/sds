// url=<FIGMA_CARDS_STATS_CARD>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Cards/Cards.tsx
// component=StatsCard

import figma from "figma";

const instance = figma.selectedInstance;

const descriptionLayer = instance.findInstance("Text");
const description =
  descriptionLayer.type !== "ERROR"
    ? descriptionLayer.getString("Text")
    : undefined;

const statLayer = instance.findInstance("Text Heading");
const stat =
  statLayer.type !== "ERROR" ? statLayer.getString("Text") : undefined;

const icon = instance.getInstanceSwap("Icon")?.executeTemplate().example;

export default {
  id: "StatsCard",
  imports: ['import { StatsCard } from "compositions";'],
  example: figma.code`<StatsCard description="${description}" stat="${stat}" icon={${icon}}/>`,
  metadata: { nestable: true },
};
