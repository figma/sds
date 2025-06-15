import { Footer, Header, Panel } from "compositions";
import { useMediaQuery } from "hooks";
import { placeholder } from "images";
import { Flex, FlexItem, Section } from "layout";
import {
  Accordion,
  AccordionItem,
  Image,
  Text,
  TextContentHeading,
} from "primitives";
import { AuthenticationProvider } from "providers";
import { PricingGrid } from "./examples/PricingGrid";
import { ProductDetails } from "./examples/ProductDetails";
import { ProductGrid } from "./examples/ProductGrid";
import { WelcomeHero } from "./examples/WelcomeHero";

function App() {
  const { isMobile, isDesktop } = useMediaQuery();
  const headerPadding = isDesktop ? "800" : "600";
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";

  return (
    <AuthenticationProvider>
      <Header paddingBottom={headerPadding} paddingTop={headerPadding} />
      <WelcomeHero />
      <ProductDetails />
      <PricingGrid />
      <ProductGrid />
      <Section padding={sectionPadding} variant="neutral">
        <Panel alignSecondary="center" gap={flexGap} type="half">
          <Image
            src={placeholder}
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
            src={placeholder}
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>

      <Section padding={sectionPadding} variant="brand">
        <Panel type="half" gap={flexGap}>
          <Image
            src={placeholder}
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
          <Image
            src={placeholder}
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>
      <Section padding={sectionPadding} variant="brand">
        <Panel type="auto">
          <FlexItem size="fill">
            <Image
              src={placeholder}
              alt="Always use image alt"
              aspectRatio="fill"
              size="large"
            />
          </FlexItem>
        </Panel>
      </Section>
      <Section padding={sectionPadding}>
        <Flex
          container
          direction="column"
          alignSecondary="stretch"
          gap={flexGap}
        >
          <TextContentHeading
            align="center"
            heading="Heading"
            subheading="Subheading"
          />
          <Flex container type="third" alignPrimary="center">
            <FlexItem size="major">
              <Accordion allowsMultipleExpanded>
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
        </Flex>
      </Section>
      <Footer />
    </AuthenticationProvider>
  );
}

export default App;
