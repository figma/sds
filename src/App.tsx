import { Footer, Header, Panel } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import { AuthenticationProvider } from "providers";
import { Image, Text, TextContentHeading } from "ui";

function App() {
  return (
    <AuthenticationProvider>
      <Header />
      <Section>
        <Panel alignSecondary="center">
          <Image
            src="https://placehold.co/560x320"
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
      <Section variant="brand">
        <Panel>
          <Image
            src="https://placehold.co/560x320"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
          <Image
            src="https://placehold.co/560x320"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>
      <Section>
        <Panel>
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
            src="https://placehold.co/560x320"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>
      <Section variant="brand">
        <Panel>
          <FlexItem size="full">
            <Image
              src="https://placehold.co/1200x320"
              alt="Always use image alt"
              aspectRatio="fill"
              size="medium"
            />
          </FlexItem>
        </Panel>
      </Section>
      <Footer />
    </AuthenticationProvider>
  );
}

export default App;
