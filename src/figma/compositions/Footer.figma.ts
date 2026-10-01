// url=<FIGMA_SECTIONS_FOOTER>
// source=https://github.com/ThomasFuturice/sds-futu/blob/main/src/ui/compositions/Footers/Footers.tsx
// component=Footer

import figma from "figma"

// The Figma Footer's "Title" slot maps to `logo` + `social`, and "Slot" maps to `columns`.
// Defaults match the Figma component, so a plain <Footer /> renders the same footer.
export default {
  id: "Footer",
  imports: ['import { Footer } from "sds-futu";'],
  example: figma.code`<Footer
  columns={[
    { title: "Use cases", links: [{ label: "UI design", href: "#" }] },
  ]}
/>`,
}
