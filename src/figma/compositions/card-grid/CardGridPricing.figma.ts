// url=<FIGMA_SECTIONS_CARD_GRID_PRICING>
// source=https://github.com/figma/sds/blob/main/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const schedule = figma.properties.children(["Navigation Pill List"])

export default {
  id: "Section",
  imports: [
    'import { PricingCard } from "compositions";',
    'import { Flex, Section } from "layout";',
  ],
  example: figma.code`function Example() {
    const { monthlyPlans } = usePricing();
    const { isMobile } = useMediaQuery();
    const padding = isMobile ? "600" : "1200";
    const gap = isMobile ? "600" : "1200";
    const gapCards = isMobile ? "600" : "1200";
    const size = isMobile ? "small" : "large";
    return (<Section padding={padding}>
        <Flex container direction="column" gap={gap}>
          ${schedule}
          <Flex container direction="row" gap={gapCards}>
            {monthlyPlans.map((option, i) => (<PricingCard key={option.sku} size={size} {...pricingPlanToPricingCardProps(option, i)}/>))}
          </Flex>
        </Flex>
      </Section>);
}`,
  metadata: { nestable: false },
}
