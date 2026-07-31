// url=<FIGMA_TAGS_TAG>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tag/Tag.tsx
// component=Tag

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const onRemove = instance.getBoolean("Removable", {
  true: figma.helpers.react.function("() => {}"),
  false: undefined,
});
const label = instance.getString("Label");
const variant = instance.getEnum("Variant", {
  Secondary: "secondary",
});
const scheme = figma.selectedInstance.getEnum("Scheme", {
  Danger: "danger",
  Positive: "positive",
  Warning: "warning",
  Neutral: "neutral",
});

export default {
  id: "Tag",
  imports: ['import { Tag } from "primitives";'],
  example: figma.code`<Tag
      ${rp("onRemove", "onRemove={() => {}}")}
      ${rp("variant", variant)}
      ${rp("scheme", scheme)}
    >
      ${label}
    </Tag>`,
  metadata: { nestable: true },
};
