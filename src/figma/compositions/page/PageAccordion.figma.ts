// url=<FIGMA_SECTIONS_PAGE_ACCORDION>
// source=https://github.com/figma/sds/blob/main/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const title = figma.properties.children(["Text Content Heading"])
const children = figma.properties.children(["Accordion"])
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
  imports: ['import { Flex, FlexItem, Section } from "layout";'],
  example: figma.code`<Section padding="${padding}">
      <Flex container alignSecondary="center" direction="column" gap="${gap}">
        ${title}
        <FlexItem>
          <Flex container type="third" alignPrimary="center">
            <FlexItem size="major">${children}</FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}
