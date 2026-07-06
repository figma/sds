// url=<FIGMA_SECTIONS_PANEL_IMAGE_DOUBLE>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma"

const padding = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1600",
  Mobile: "600",
})
const gap = figma.selectedInstance.getEnum("Platform", {
  Desktop: "1200",
  Mobile: "600",
})

export default {
  id: "Panel",
  imports: [
    'import { Panel } from "compositions";',
    'import { Section } from "layout";',
    'import { placeholder } from "images";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Panel gap="${gap}" type="half">
        <Image src={placeholder} alt="Always use image alt" aspectRatio="4-3" size="medium"/>
        <Image src={placeholder} alt="Always use image alt" aspectRatio="4-3" size="medium"/>
      </Panel>
    </Section>`,
  metadata: { nestable: true },
}
