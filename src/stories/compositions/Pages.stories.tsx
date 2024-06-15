import { Meta, StoryObj } from "@storybook/react";
import { Footer, Header, Panel } from "compositions";
import { Flex, Section } from "layout";
import { Image, Text, TextContentHeading } from "ui";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "SDS Compositions/Pages",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Header> = {
  render: () => (
    <>
      <Header />
      <Section>
        <Panel alignSecondary="center">
          <Image
            src="https://placehold.co/560x320"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
          <Flex direction="column" gap="600">
            <TextContentHeading heading="Heading" subheading="Subheading" />
            <Text>
              Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look:
            </Text>
            <Text>
              Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi
              intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </Text>
          </Flex>
        </Panel>
      </Section>
      <Section>
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
          <Flex direction="column" gap="600">
            <TextContentHeading heading="Heading" subheading="Subheading" />
            <Text>
              Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look:
            </Text>
            <Text>
              Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi
              intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </Text>
          </Flex>
          <Image
            src="https://placehold.co/560x320"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>
      <Footer />
    </>
  ),
};
