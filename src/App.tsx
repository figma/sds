import {
  Footer,
  Header,
  Panel,
  PricingCard,
  ProductInfoCard,
} from "compositions";
import { useMediaQuery } from "hooks";
import { IconCheck } from "icons";
import { Flex, FlexItem, Section } from "layout";
import { AuthenticationProvider } from "providers";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Form,
  Image,
  Input,
  Navigation,
  NavigationItem,
  Search,
  SelectField,
  SelectItem,
  Tag,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
  Text,
  TextContentHeading,
  TextHeading,
  TextPrice,
} from "ui";

function App() {
  const { isMobile, isDesktop } = useMediaQuery();
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";
  const [pricingInterval, setPricingInterval] = useState("monthly");
  const intervalText = pricingInterval === "monthly" ? "month" : "year";
  const annualRatio = pricingInterval === "monthly" ? 1 : 11;

  return (
    <AuthenticationProvider>
      <Header />
      <Section padding={sectionPadding}>
        <Flex
          container
          direction="column"
          alignSecondary="center"
          gap={flexGap}
        >
          <TextContentHeading
            align="center"
            heading="Heading"
            subheading="Subheading"
          />
          <FlexItem>
            <Flex container type="third" alignPrimary="center">
              <FlexItem size="major">
                <Accordion>
                  <AccordionItem title="Title">
                    Answer the frequently asked question in a simple sentence, a
                    longish paragraph, or even in a list.
                  </AccordionItem>
                  <AccordionItem title="Title">
                    Answer the frequently asked question in a simple sentence, a
                    longish paragraph, or even in a list.
                  </AccordionItem>
                  <AccordionItem title="Title">
                    Answer the frequently asked question in a simple sentence, a
                    longish paragraph, or even in a list.
                  </AccordionItem>
                  <AccordionItem title="Title">
                    Answer the frequently asked question in a simple sentence, a
                    longish paragraph, or even in a list.
                  </AccordionItem>
                  <AccordionItem title="Title">
                    Answer the frequently asked question in a simple sentence, a
                    longish paragraph, or even in a list.
                  </AccordionItem>
                </Accordion>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding={sectionPadding}>
        <Flex container type="half" wrap gap={flexGap}>
          <Image
            src="https://placehold.co/600/f0f0f0/ddd?text=SDS"
            alt="Always use image alt"
            size="large"
            aspectRatio="4-3"
          />
          <FlexItem size="half">
            <Flex direction="column" gap="600" alignSecondary="stretch">
              <TextHeading>Text Heading</TextHeading>
              <FlexItem>
                <Flex direction="column" gap="200">
                  <Tag variant="secondary" scheme="positive">
                    Tag
                  </Tag>
                  <TextPrice label="/ month" currency="$" price="50" />
                </Flex>
              </FlexItem>
              <Text>Text</Text>
              <FlexItem>
                <Flex wrap type="half" gap="200">
                  <SelectField
                    label="Label"
                    defaultSelectedKey="Hello World"
                    placeholder="Select theme..."
                  >
                    <SelectItem>item1</SelectItem>
                    <SelectItem>item2</SelectItem>
                    <SelectItem>item3</SelectItem>
                    <SelectItem>item4</SelectItem>
                    <SelectItem>item5</SelectItem>
                  </SelectField>
                  <SelectField
                    label="Label"
                    defaultSelectedKey="Hello World"
                    placeholder="Select theme..."
                  >
                    <SelectItem>item1</SelectItem>
                    <SelectItem>item2</SelectItem>
                    <SelectItem>item3</SelectItem>
                    <SelectItem>item4</SelectItem>
                    <SelectItem>item5</SelectItem>
                  </SelectField>
                </Flex>
              </FlexItem>
              <Button onPress={() => {}} variant="primary">
                Button
              </Button>
              <Accordion>
                <AccordionItem title="Title">
                  Answer the frequently asked question in a simple sentence, a
                  longish paragraph, or even in a list.
                </AccordionItem>
              </Accordion>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding={sectionPadding}>
        <Flex container wrap gap={flexGap} alignPrimary="center">
          <TextContentHeading
            align="center"
            heading="Follow the latest trends"
            subheading="With our daily newsletter"
          />
          <Form singleLine>
            <Input placeholder="you@example.com" />
            <Button onPress={() => {}} variant="primary">
              Submit
            </Button>
          </Form>
        </Flex>
      </Section>
      <Section padding={sectionPadding}>
        <Flex
          container
          gap={flexGap}
          direction="column"
          alignSecondary="stretch"
        >
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
        <Panel alignSecondary="center" gap={flexGap} type="half">
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
        <Panel type="half" gap={flexGap}>
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
        <Panel type="half" gap={flexGap}>
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
      <Section padding={sectionPadding}>
        <Flex container wrap type="quarter" gap={flexGap}>
          {isMobile ? null : (
            <FlexItem size="minor">Filter content will go here</FlexItem>
          )}
          <FlexItem size={isDesktop ? "major" : "full"}>
            <Flex direction="column" gap="1200" alignSecondary="stretch">
              <Flex type="auto" alignPrimary="space-between" wrap gap="600">
                <FlexItem size="fill">
                  <Flex alignPrimary="stretch">
                    <Search placeholder="Search" />
                  </Flex>
                </FlexItem>
                <TagToggleGroup>
                  <TagToggleList>
                    <TagToggle id="New" iconStart={<IconCheck />}>
                      New
                    </TagToggle>
                    <TagToggle id="Price ascending">Price ascending</TagToggle>
                    <TagToggle id="Price descending">
                      Price descending
                    </TagToggle>
                    <TagToggle id="Rating">Rating</TagToggle>
                  </TagToggleList>
                </TagToggleGroup>
              </Flex>
              <Flex type="third" wrap gap="600">
                <ProductInfoCard
                  asset={
                    <Image
                      alt="Accessibility!"
                      src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
                    />
                  }
                  heading="Product"
                  price={5}
                  description="Wow do we have a cool thing for you. What an amazing thing."
                />
                <ProductInfoCard
                  asset={
                    <Image
                      alt="Accessibility!"
                      src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
                    />
                  }
                  heading="Product"
                  price={5}
                  description="Wow do we have a cool thing for you. What an amazing thing."
                />
                <ProductInfoCard
                  asset={
                    <Image
                      alt="Accessibility!"
                      src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
                    />
                  }
                  heading="Product"
                  price={5}
                  description="Wow do we have a cool thing for you. What an amazing thing."
                />
                <ProductInfoCard
                  asset={
                    <Image
                      alt="Accessibility!"
                      src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
                    />
                  }
                  heading="Product"
                  price={5}
                  description="Wow do we have a cool thing for you. What an amazing thing."
                />
                <ProductInfoCard
                  asset={
                    <Image
                      alt="Accessibility!"
                      src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
                    />
                  }
                  heading="Product"
                  price={5}
                  description="Wow do we have a cool thing for you. What an amazing thing."
                />
                <ProductInfoCard
                  asset={
                    <Image
                      alt="Accessibility!"
                      src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
                    />
                  }
                  heading="Product"
                  price={5}
                  description="Wow do we have a cool thing for you. What an amazing thing."
                />
              </Flex>
            </Flex>
          </FlexItem>
        </Flex>
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
