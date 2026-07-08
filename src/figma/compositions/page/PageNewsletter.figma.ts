// url=<FIGMA_SECTIONS_PAGE_NEWSLETTER>
// source=https://github.com/figma/sds/blob/main/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const children = figma.properties.children([
  "Text Content Heading",
  "Form Newsletter",
])
const padding = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1600",
  Mobile: "600",
})
const gap = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1200",
  Mobile: "600",
})

export default {
  id: "Section",
  imports: ['import { Flex, Section } from "layout";'],
  example: figma.code`<Section padding="${padding}">
      <Flex container wrap gap="${gap}" direction="column" alignPrimary="center" alignSecondary="center" type="third">
        ${children}
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}
