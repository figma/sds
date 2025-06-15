import { PricingCard } from "compositions";
import { PricingContext } from "data";
import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import { Navigation, NavigationPill } from "primitives";
import { useContext, useState } from "react";

export function PricingGrid() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const { monthlyOptions, annualOptions } = useContext(PricingContext);
  const [pricingInterval, setPricingInterval] = useState("monthly");
  const flexGap = isMobile ? "600" : "1200";
  const options =
    pricingInterval === "monthly" ? monthlyOptions : annualOptions;

  return (
    <Section padding={sectionPadding}>
      <Flex container gap={flexGap} direction="column" alignSecondary="stretch">
        <FlexItem>
          <Flex alignPrimary="center">
            <Navigation direction="row">
              <NavigationPill
                onPress={() => setPricingInterval("monthly")}
                isSelected={pricingInterval === "monthly"}
              >
                Monthly
              </NavigationPill>
              <NavigationPill
                onPress={() => setPricingInterval("yearly")}
                isSelected={pricingInterval === "yearly"}
              >
                Yearly
              </NavigationPill>
            </Navigation>
          </Flex>
        </FlexItem>
        <FlexItem>
          <Flex wrap type="third" gap="1200">
            {options.map((option) => (
              <PricingCard
                key={option.sku}
                {...option}
                size={isMobile ? "small" : "large"}
              />
            ))}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
