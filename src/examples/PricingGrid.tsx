import { PricingCard, PricingCardProps } from "compositions";
import { useMediaQuery } from "hooks";
import { IconGithub, IconThumbsUp, IconTrash } from "icons";
import { Flex, FlexItem, Section } from "layout";
import { Navigation, NavigationPill } from "primitives";
import { createContext, useContext, useState } from "react";

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

const shared: Record<
  string,
  Omit<
    PricingCardProps,
    "price" | "priceLabel" | "sku" | "interval" | "onAction"
  >
> = {
  beginner: {
    list: ["Promises", "Intentions", "240 credits"],
    heading: "Beginner",
    priceCurrency: "$",
    action: "Select Beginner",
    actionIcon: <IconThumbsUp />,
    actionVariant: "primary",
    variant: "stroke",
  },
  advanced: {
    list: ["Kept promises", "Better intentions", "480 credits"],
    heading: "Advanced",
    priceCurrency: "$",
    action: "Select Advanced",
    actionVariant: "primary",
    actionIcon: <IconTrash />,
    variant: "stroke",
  },
  business: {
    heading: "Business",
    priceCurrency: "$",
    variant: "brand",
    list: ["Kept promises", "Best intentions", "Infinite credits"],
    action: "Select Business",
    actionVariant: "neutral",
    actionIcon: <IconGithub />,
  },
};

export const PricingContext = createContext<{
  monthlyOptions: PricingCardProps[];
  annualOptions: PricingCardProps[];
}>({
  monthlyOptions: [
    {
      ...shared.beginner,
      price: "5",
      priceLabel: "/ mo",
      sku: "month_01",
      interval: "month",
      onAction: () => {},
    },
    {
      ...shared.advanced,
      price: "10",
      priceLabel: "/ mo",
      sku: "month_02",
      interval: "month",
      onAction: () => {},
    },
    {
      ...shared.business,
      price: "25",
      priceLabel: "/ mo",
      sku: "month_03",
      interval: "month",
      onAction: () => {},
    },
  ],
  annualOptions: [
    {
      ...shared.beginner,
      price: "50",
      priceLabel: "/ yr",
      sku: "year_01",
      interval: "year",
      onAction: () => {},
    },
    {
      ...shared.advanced,
      price: "100",
      priceLabel: "/ yr",
      sku: "year_02",
      interval: "year",
      onAction: () => {},
    },
    {
      ...shared.business,
      price: "250",
      priceLabel: "/ yr",
      sku: "year_03",
      interval: "year",
      onAction: () => {},
    },
  ],
});
