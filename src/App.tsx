import { Footer, Header, Panel, PricingCard } from "compositions";
import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import { AuthenticationProvider } from "providers";
import { useState } from "react";
import {
  Image,
  Navigation,
  NavigationItem,
  Text,
  TextContentHeading,
} from "ui";

function App() {
  const { isMobile } = useMediaQuery();
  const panelGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";
  const [pricingInterval, setPricingInterval] = useState("monthly");
  const intervalText = pricingInterval === "monthly" ? "month" : "year";
  const annualRatio = pricingInterval === "monthly" ? 1 : 11;

  return (
    <AuthenticationProvider>
      <Header />
      <Section padding="1200">
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <FlexItem>
            <Flex alignPrimary="center">
              <Navigation direction="row">
                <NavigationItem
                  onPress={() => setPricingInterval("monthly")}
                  isSelected={pricingInterval === "monthly"}
                >
                  Monthly
                </NavigationItem>
                <NavigationItem
                  onPress={() => setPricingInterval("yearly")}
                  isSelected={pricingInterval === "yearly"}
                >
                  Yearly
                </NavigationItem>
              </Navigation>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Flex wrap type="third" gap="1200">
              <PricingCard
                action="Select"
                actionVariant="neutral"
                heading="Free"
                price={0 * annualRatio}
                pricePer={`/ per ${intervalText}`}
                items={["List item 1", "List item 2", "List item 3"]}
                onAction={() => {}}
              />
              <PricingCard
                action="Select"
                heading="Starter"
                price={50 * annualRatio}
                pricePer={`/ per ${intervalText}`}
                items={["List item 1", "List item 2", "List item 3"]}
                onAction={() => {}}
              />
              <PricingCard
                action="Select"
                actionVariant="neutral"
                heading="Enterprise"
                price={150 * annualRatio}
                pricePer={`/ per ${intervalText}`}
                items={["List item 1", "List item 2", "List item 3"]}
                onAction={() => {}}
              />
            </Flex>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding={sectionPadding}>
        <Panel alignSecondary="center" gap={panelGap} type="half">
          <Image
            src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
          <FlexItem size="half">
            <Flex direction="column" gap="600">
              <TextContentHeading heading="Heading" subheading="Subheading" />
              <Text>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might look:
              </Text>
              <Text>
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </Text>
            </Flex>
          </FlexItem>
        </Panel>
      </Section>
      <Section padding={sectionPadding} variant="brand">
        <Panel type="half" gap={panelGap}>
          <Image
            src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
          <Image
            src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>
      <Section padding={sectionPadding}>
        <Panel type="half" gap={panelGap}>
          <FlexItem size="half">
            <Flex direction="column" gap="600">
              <TextContentHeading heading="Heading" subheading="Subheading" />
              <Text>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might look:
              </Text>
              <Text>
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </Text>
            </Flex>
          </FlexItem>
          <Image
            src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>
      <Section padding={sectionPadding} variant="brand">
        <Panel type="auto">
          <FlexItem size="full">
            <Image
              src="https://placehold.co/1200x320/f0f0f0/ddd?text=SDS"
              alt="Always use image alt"
              aspectRatio="fill"
              size="large"
            />
          </FlexItem>
        </Panel>
      </Section>
      <Footer />
    </AuthenticationProvider>
  );
}

export default App;
