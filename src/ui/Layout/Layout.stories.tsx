import type { Meta, StoryObj } from "@storybook/react";
import { StandardFooter } from "blocks/Footers/Footers";
import { StandardHeader, VerticalHeader } from "blocks/Headers/Headers";
import { IconFacebook, IconInstagram, IconLinkedin, IconYoutube } from "icons";
import {
  Button,
  ButtonGroup,
  Flow,
  IconButton,
  Layout,
  LayoutItem,
  Section,
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
} from "ui";
import { Logo } from "ui/Logo/Logo";
import { Navigation, NavigationItem } from "ui/Navigation/Navigation";

const meta: Meta<typeof Layout> = {
  component: Layout,
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

export const LayoutStory: StoryObj<typeof Layout> = {
  args: {
    gap: "sm",
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
    <Layout direction="column" gap="xl">
      <LayoutItem size="full">
        <Layout {...args} direction="row">
          <LayoutItem size="full">{renderChild("full")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
        </Layout>
      </LayoutItem>
      <LayoutItem size="full">
        <Layout {...args}>
          <LayoutItem size="full">{renderChild("full")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="half">{renderChild("half")}</LayoutItem>
        </Layout>
      </LayoutItem>
      <LayoutItem size="full">
        <Layout {...args}>
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
          {renderChild("span")}
        </Layout>
      </LayoutItem>
    </Layout>
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
        <Layout direction="column" alignSecondary="center" gap="md">
          <Logo />
          <Navigation>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem isSelected>About</NavigationItem>
            <NavigationItem>Pricing</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
            <NavigationItem>Careers</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
          </Navigation>
        </Layout>
      </VerticalHeader>
      <StandardHeader>
        <Flow direction="row">
          <Logo />

          <Flow direction="row">
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
          </Flow>
        </Flow>
      </StandardHeader>
      <Section {...args}>
        <Layout gap="xl">
          <LayoutItem size="full">{renderChild("full")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
        </Layout>
      </Section>
      <Section {...args} variant="secondary">
        <Layout gap="xl">
          <LayoutItem size="full">{renderChild("full")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
        </Layout>
      </Section>
      <Section {...args}>
        <Layout gap="xl">
          <LayoutItem size="full">{renderChild("full")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="minor">{renderChild("minor")}</LayoutItem>
          <LayoutItem size="major">{renderChild("major")}</LayoutItem>
        </Layout>
      </Section>

      <StandardFooter>
        <Layout gap="xl" alignSecondary="start">
          <Flow gap="lg">
            <Logo />
            <ButtonGroup>
              <IconButton
                aria-label="Write a nice description of the action."
                onPress={() => {}}
                size="sm"
                variant="subtle"
              >
                <IconFacebook />
              </IconButton>
              <IconButton
                aria-label="Write a nice description of the action."
                onPress={() => {}}
                size="sm"
                variant="subtle"
              >
                <IconLinkedin />
              </IconButton>
              <IconButton
                aria-label="Write a nice description of the action."
                onPress={() => {}}
                size="sm"
                variant="subtle"
              >
                <IconYoutube />
              </IconButton>
              <IconButton
                aria-label="Write a nice description of the action."
                onPress={() => {}}
                size="sm"
                variant="subtle"
              >
                <IconInstagram />
              </IconButton>
            </ButtonGroup>
          </Flow>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
        </Layout>
      </StandardFooter>
    </>
  ),
};
