import {
  PricingCard,
  PricingCardSkeleton,
  pricingPlanToPricingCardProps,
} from "compositions";
import { usePricing } from "data";
import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import { Navigation, NavigationPill } from "primitives";
import { useState } from "react";

export function PricingGrid() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const { monthlyPlans, annualPlans, currentPlan, setCurrentPlan, isLoading } =
    usePricing();
  const [pricingInterval, setPricingInterval] = useState("monthly");
  const flexGap = isMobile ? "600" : "1200";
  const options = pricingInterval === "monthly" ? monthlyPlans : annualPlans;

  return (
    <Section padding={sectionPadding} variant="stroke">
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
            {isLoading ? (
              <>
                <PricingCardSkeleton size={isMobile ? "small" : "large"} />
                <PricingCardSkeleton size={isMobile ? "small" : "large"} />
                <PricingCardSkeleton size={isMobile ? "small" : "large"} />
              </>
            ) : (
              options.map((option, i) => {
                const props = pricingPlanToPricingCardProps(
                  option,
                  i,
                  currentPlan,
                  setCurrentPlan,
                );
                return (
                  <PricingCard
                    key={option.sku}
                    {...props}
                    size={isMobile ? "small" : "large"}
                  />
                );
              })
            )}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
