import { Meta, StoryObj } from "@storybook/react";
import { Footer, Header, Panel } from "compositions";
import { Section } from "layout";
import { Image } from "ui";

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
      <Footer />
    </>
  ),
};
