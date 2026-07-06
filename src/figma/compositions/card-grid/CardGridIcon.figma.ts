// url=<FIGMA_SECTIONS_CARD_GRID_ICON>
// source=https://github.com/figma/sds/blob/main/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const gap = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1200",
  Mobile: "600",
})
const padding = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1200",
  Mobile: "600",
})
const top = figma.properties.children(["Text Content Heading"])
const cards = figma.properties.children(["Card"])

export default {
  id: "Section",
  imports: ['import { Flex, FlexItem, Section } from "layout";'],
  example: figma.code`<Section padding="${padding}">
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        ${top}
        <FlexItem>
          <Flex wrap gap="${gap}">
            ${cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}
