import type { Meta, StoryObj } from "@storybook/react";
import { StandardHeader, VerticalHeader } from "blocks/Headers/Headers";
import { Button, ButtonGroup, Grid, GridItem, Section } from "ui";
import { Logo } from "ui/Logo/Logo";
import { Navigation, NavigationItem } from "ui/Navigation/Navigation";

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
      <VerticalHeader>
        <Grid auto direction="column" alignSecondary="center" gap="md">
          <Logo />
          <Navigation>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem isSelected>About</NavigationItem>
            <NavigationItem>Pricing</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
            <NavigationItem>Careers</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
          </Navigation>
        </Grid>
      </VerticalHeader>

      <StandardHeader>
        <Grid>
          <GridItem size="minor">
            <Logo />
          </GridItem>
          <GridItem size="major">
            <Grid auto gap="xl" alignPrimary="end">
              <Navigation>
                <NavigationItem>Home</NavigationItem>
                <NavigationItem isSelected>About</NavigationItem>
                <NavigationItem>Pricing</NavigationItem>
                <NavigationItem>Blog</NavigationItem>
                <NavigationItem>Careers</NavigationItem>
                <NavigationItem>Contact</NavigationItem>
              </Navigation>
              <ButtonGroup>
                <Button onPress={() => {}} variant="secondary">
                  Log in
                </Button>
                <Button onPress={() => {}}>Register</Button>
              </ButtonGroup>
            </Grid>
          </GridItem>
        </Grid>
      </StandardHeader>

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
