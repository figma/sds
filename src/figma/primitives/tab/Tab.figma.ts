// url=<FIGMA_TABS_TAB>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tab/Tab.tsx
// component=Tab

import figma from "figma"

const label = figma.selectedInstance.getString("Label")

export default {
  id: "Tab",
  imports: ['import { Tab } from "primitives";'],
  example: figma.code`<Tab${figma.helpers.react.renderProp("id", label)}>${label}</Tab>`,
  metadata: { nestable: true },
}
