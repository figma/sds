// url=<FIGMA_SECTIONS_PANEL_IMAGE>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma"

const padding = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1600",
  Mobile: "600",
})

export default {
  id: "Panel",
  imports: [
    'import { Panel } from "compositions";',
    'import { FlexItem, Section } from "layout";',
    'import { placeholder } from "images";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Panel type="auto">
        <FlexItem size="full">
          <Image src={placeholder} alt="Always use image alt" aspectRatio="fill" size="medium"/>
        </FlexItem>
      </Panel>
    </Section>`,
  metadata: { nestable: true },
}
