import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "ui";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "ui/Grid",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Grid>;

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

export const Default: Story = {
  args: {
    gap: undefined,
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: [undefined, "xs", "sm", "md", "lg", "xl"],
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
