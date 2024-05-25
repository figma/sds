import type { Meta, StoryObj } from "@storybook/react";
import {
  Label,
  Tag,
  TagButton,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
} from "ui";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "ui/Tag",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Tag>;
type StoryToggle = StoryObj<typeof TagToggleGroup>;

export const Default: Story = {
  args: {},
  render: () => (
    <Layout alignPrimary="center" gap="md">
      <LayoutItem>
        <Tag scheme="default">Default</Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="danger">Danger</Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="positive">Positive</Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="warning">Warning</Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="neutral">Neutral</Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="default" variant="secondary">
          Default
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="danger" variant="secondary">
          Danger
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="positive" variant="secondary">
          Positive
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="warning" variant="secondary">
          Warning
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag scheme="neutral" variant="secondary">
          Neutral
        </Tag>
      </LayoutItem>
    </Layout>
  ),
};

export const Removable: Story = {
  args: {},
  render: () => (
    <Layout alignPrimary="center" gap="md">
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="default">
          Default
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="danger">
          Danger
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="positive">
          Positive
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="warning">
          Warning
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="neutral">
          Neutral
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="default" variant="secondary">
          Default
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="danger" variant="secondary">
          Danger
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="positive" variant="secondary">
          Positive
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="warning" variant="secondary">
          Warning
        </Tag>
      </LayoutItem>
      <LayoutItem>
        <Tag onRemove={() => {}} scheme="neutral" variant="secondary">
          Neutral
        </Tag>
      </LayoutItem>
    </Layout>
  ),
};

export const TagButtonDefault: Story = {
  args: {},
  render: () => (
    <Layout alignPrimary="center" gap="md">
      <LayoutItem>
        <TagButton scheme="default">Default</TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="danger">Danger</TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="positive">Positive</TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="warning">Warning</TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="neutral">Neutral</TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="default" variant="secondary">
          Default
        </TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="danger" variant="secondary">
          Danger
        </TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="positive" variant="secondary">
          Positive
        </TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="warning" variant="secondary">
          Warning
        </TagButton>
      </LayoutItem>
      <LayoutItem>
        <TagButton scheme="neutral" variant="secondary">
          Neutral
        </TagButton>
      </LayoutItem>
    </Layout>
  ),
};

export const TagToggleDefault: StoryToggle = {
  args: {
    selectionMode: "single",
  },
  argTypes: {
    selectionMode: {
      options: ["single", "multiple", "none"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <Layout alignPrimary="center">
      <TagToggleGroup defaultSelectedKeys={["default"]} {...args}>
        <Label>Hello there</Label>
        <TagToggleList>
          <TagToggle id="default">Default</TagToggle>
          <TagToggle>Danger</TagToggle>
          <TagToggle>Positive</TagToggle>
          <TagToggle>Warning</TagToggle>
          <TagToggle>Neutral</TagToggle>
        </TagToggleList>
      </TagToggleGroup>
    </Layout>
  ),
};
