import type { Meta, StoryObj } from "@storybook/react";
import {
  Grid,
  GridItem,
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
    <Grid auto alignPrimary="center" gap="md">
      <GridItem>
        <Tag scheme="default">Default</Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="danger">Danger</Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="positive">Positive</Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="warning">Warning</Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="neutral">Neutral</Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="default" variant="secondary">
          Default
        </Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="danger" variant="secondary">
          Danger
        </Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="positive" variant="secondary">
          Positive
        </Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="warning" variant="secondary">
          Warning
        </Tag>
      </GridItem>
      <GridItem>
        <Tag scheme="neutral" variant="secondary">
          Neutral
        </Tag>
      </GridItem>
    </Grid>
  ),
};

export const Removable: Story = {
  args: {},
  render: () => (
    <Grid auto alignPrimary="center" gap="md">
      <GridItem>
        <Tag onRemove={() => {}} scheme="default">
          Default
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="danger">
          Danger
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="positive">
          Positive
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="warning">
          Warning
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="neutral">
          Neutral
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="default" variant="secondary">
          Default
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="danger" variant="secondary">
          Danger
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="positive" variant="secondary">
          Positive
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="warning" variant="secondary">
          Warning
        </Tag>
      </GridItem>
      <GridItem>
        <Tag onRemove={() => {}} scheme="neutral" variant="secondary">
          Neutral
        </Tag>
      </GridItem>
    </Grid>
  ),
};

export const TagButtonDefault: Story = {
  args: {},
  render: () => (
    <Grid auto alignPrimary="center" gap="md">
      <GridItem>
        <TagButton scheme="default">Default</TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="danger">Danger</TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="positive">Positive</TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="warning">Warning</TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="neutral">Neutral</TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="default" variant="secondary">
          Default
        </TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="danger" variant="secondary">
          Danger
        </TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="positive" variant="secondary">
          Positive
        </TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="warning" variant="secondary">
          Warning
        </TagButton>
      </GridItem>
      <GridItem>
        <TagButton scheme="neutral" variant="secondary">
          Neutral
        </TagButton>
      </GridItem>
    </Grid>
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
    <Grid alignPrimary="center">
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
    </Grid>
  ),
};
