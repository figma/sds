import { Meta, StoryObj } from "@storybook/react";
import { Footer, Header, Panel } from "compositions";
import { placeholder } from "images";
import { Section } from "layout";
import { Image } from "primitives";

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
      <Section padding="1600">
        <Panel type="half" gap="600">
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
      <Footer />
    </>
  ),
};
