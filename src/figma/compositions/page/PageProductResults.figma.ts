// url=<FIGMA_SECTIONS_PAGE_PRODUCT_RESULTS>
// source=https://github.com/figma/sds/blob/main/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const controls = figma.properties.children(["Search", "Tag Toggle Group"])
const cards = figma.properties.children(["Product Info Card"])
const padding = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1600",
  Mobile: "600",
})
const gap = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1200",
  Mobile: "600",
})
const majorSize = figma.selectedInstance.getEnum("Platform", {
  Desktop: "major",
  Mobile: "full",
})
const aside = figma.properties.children([
  "Text",
  "Tag",
  "Checkbox Group",
  "Slider Field",
])

export default {
  id: "Section",
  imports: [
    'import { Card } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Flex container wrap type="quarter" gap="${gap}">
        <FlexItem size="minor">
          <Card variant="stroke">${aside}</Card>
        </FlexItem>
        <FlexItem size="${majorSize}">
          <Flex direction="column" gap="${gap}" alignSecondary="stretch">
            <Flex type="auto" alignPrimary="space-between" wrap gap="600">
              ${controls}
            </Flex>
            <Flex type="third" wrap gap="600">
              ${cards}
            </Flex>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}
