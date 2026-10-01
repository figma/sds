import type { Meta, StoryObj } from "@storybook/react";
import { Hero, Panel } from "compositions";
import { placeholder } from "images";
import {
  Button,
  ButtonGroup,
  Image,
  TextContentHeading,
  TextContentTitle,
} from "primitives";

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: "SDS Compositions/Sections",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const StoryHero: StoryObj<typeof Hero> = {
  name: "Hero",
  args: { variant: "subtle" },
  argTypes: {
    variant: { control: { type: "select" }, options: ["brand", "neutral", "stroke", "subtle"] },
  },
  render: (args) => (
    <Hero {...args} flexProps={{ direction: "column", alignSecondary: "center" }}>
      <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
      <ButtonGroup align="center">
        <Button variant="neutral" onPress={() => {}}>Button</Button>
        <Button variant="primary" onPress={() => {}}>Button</Button>
      </ButtonGroup>
    </Hero>
  ),
};

export const StoryPanel: StoryObj<typeof Panel> = {
  name: "Panel — image + content",
  render: () => (
    <Panel type="half" gap="1200" alignSecondary="center">
      <Image src={placeholder} alt="Placeholder" aspectRatio="4-3" size="fill" />
      <TextContentHeading heading="Heading" subheading="Subheading" />
    </Panel>
  ),
};
