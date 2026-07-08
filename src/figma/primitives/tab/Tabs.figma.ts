// url=<FIGMA_TABS_TABS>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tab/Tab.tsx
// component=Tabs

import figma from "figma"

const children = figma.properties.children(["Tab"])

export default {
  id: "Tabs",
  imports: ['import { TabList, TabPanel, Tabs } from "primitives";'],
  example: figma.code`<Tabs>
      <TabList>${children}</TabList>
      <TabPanel id="match-each-tab">Some stuff</TabPanel>
    </Tabs>`,
  metadata: { nestable: true },
}
