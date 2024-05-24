import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem, Section } from "ui";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "ui/Layout",
  parameters: { layout: "centered" },
};
export default meta;

const renderChild = (text: string) => (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      padding: "0.5rem 1rem",
      background: "var(--sds-color-bg-brand-default)",
      color: "var(--sds-color-text-brand-onbrand)",
    }}
  >
    {text}
  </div>
);

export const GridStory: StoryObj<typeof Grid> = {
  args: {
    gap: undefined,
    type: "quarter",
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: [undefined, "xs", "sm", "md", "lg", "xl"],
    },
    type: {
      control: { type: "select" },
      options: ["quarter", "third"],
    },
  },
  render: (args) => (
    <Grid auto direction="column" gap="xl">
      <Grid {...args} auto direction="row">
        <GridItem size="full">{renderChild("full")}</GridItem>
        <GridItem size="major">{renderChild("major")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="major">{renderChild("major")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
      </Grid>
      <Grid {...args}>
        <GridItem size="full">{renderChild("full")}</GridItem>
        <GridItem size="major">{renderChild("major")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="major">{renderChild("major")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="minor">{renderChild("minor")}</GridItem>
        <GridItem size="half">{renderChild("half")}</GridItem>
      </Grid>
    </Grid>
  ),
};

export const SectionStory: StoryObj<typeof Section> = {
  args: {
    padding: "md",
    variant: "subtle",
  },
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["subtle", "brand", "stroke", "secondary"],
    },
  },
  render: (args) => (
    <>
      <Section {...args}>
        <Grid auto gap="xl">
          <GridItem size="full">{renderChild("full")}</GridItem>
          <GridItem size="major">{renderChild("major")}</GridItem>
          <GridItem size="minor">{renderChild("minor")}</GridItem>
          <GridItem size="minor">{renderChild("minor")}</GridItem>
          <GridItem size="major">{renderChild("major")}</GridItem>
        </Grid>
      </Section>
      <Section {...args} variant="secondary">
        <Grid auto gap="xl">
          <GridItem size="full">{renderChild("full")}</GridItem>
          <GridItem size="major">{renderChild("major")}</GridItem>
          <GridItem size="minor">{renderChild("minor")}</GridItem>
          <GridItem size="minor">{renderChild("minor")}</GridItem>
          <GridItem size="major">{renderChild("major")}</GridItem>
        </Grid>
      </Section>
      <Section {...args}>
        <Grid auto gap="xl">
          <GridItem size="full">{renderChild("full")}</GridItem>
          <GridItem size="major">{renderChild("major")}</GridItem>
          <GridItem size="minor">{renderChild("minor")}</GridItem>
          <GridItem size="minor">{renderChild("minor")}</GridItem>
          <GridItem size="major">{renderChild("major")}</GridItem>
        </Grid>
      </Section>
    </>
  ),
};
