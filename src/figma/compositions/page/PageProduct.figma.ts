// url=<FIGMA_SECTIONS_PAGE_PRODUCT>
// source=https://github.com/figma/sds/blob/main/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const textHeading = figma.properties.children(["Text Heading"])
const tagAndPrice = figma.properties.children(["Tag", "Text Price"])
const text = figma.properties.children(["Text"])
const fields = figma.properties.children(["Select Field"])
const button = figma.properties.children(["Button"])
const accordion = figma.properties.children(["Accordion"])
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
  imports: [
    'import { Flex, FlexItem, Section } from "layout";',
    'import { placeholder } from "images";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Flex container type="half" wrap gap="${gap}">
        <Image src={placeholder} alt="Always use image alt" size="large" aspectRatio="4-3"/>
        <FlexItem size="half">
          <Flex direction="column" gap="600" alignSecondary="stretch">
            ${textHeading}
            <FlexItem>
              <Flex direction="column" gap="200">
                ${tagAndPrice}
              </Flex>
            </FlexItem>
            ${text}
            <FlexItem>
              <Flex wrap type="half" gap="200">
                ${fields}
              </Flex>
            </FlexItem>
            ${button}
            ${accordion}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}
