import type { Meta, StoryObj } from "@storybook/react";
import {
  Grid,
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
    <Grid>
      <Grid alignPrimary="center">
        <Tag scheme="default">Default</Tag>
        <Tag scheme="danger">Danger</Tag>
        <Tag scheme="positive">Positive</Tag>
        <Tag scheme="warning">Warning</Tag>
        <Tag scheme="neutral">Neutral</Tag>
      </Grid>
      <Grid alignPrimary="center">
        <Tag scheme="default" variant="secondary">
          Default
        </Tag>
        <Tag scheme="danger" variant="secondary">
          Danger
        </Tag>
        <Tag scheme="positive" variant="secondary">
          Positive
        </Tag>
        <Tag scheme="warning" variant="secondary">
          Warning
        </Tag>
        <Tag scheme="neutral" variant="secondary">
          Neutral
        </Tag>
      </Grid>
    </Grid>
  ),
};

export const Removable: Story = {
  args: {},
  render: () => (
    <Grid>
      <Grid alignPrimary="center">
        <Tag onRemove={() => {}} scheme="default">
          Default
        </Tag>
        <Tag onRemove={() => {}} scheme="danger">
          Danger
        </Tag>
        <Tag onRemove={() => {}} scheme="positive">
          Positive
        </Tag>
        <Tag onRemove={() => {}} scheme="warning">
          Warning
        </Tag>
        <Tag onRemove={() => {}} scheme="neutral">
          Neutral
        </Tag>
      </Grid>
      <Grid alignPrimary="center">
        <Tag onRemove={() => {}} scheme="default" variant="secondary">
          Default
        </Tag>
        <Tag onRemove={() => {}} scheme="danger" variant="secondary">
          Danger
        </Tag>
        <Tag onRemove={() => {}} scheme="positive" variant="secondary">
          Positive
        </Tag>
        <Tag onRemove={() => {}} scheme="warning" variant="secondary">
          Warning
        </Tag>
        <Tag onRemove={() => {}} scheme="neutral" variant="secondary">
          Neutral
        </Tag>
      </Grid>
    </Grid>
  ),
};

export const TagButtonDefault: Story = {
  args: {},
  render: () => (
    <Grid>
      <Grid alignPrimary="center">
        <TagButton scheme="default">Default</TagButton>
        <TagButton scheme="danger">Danger</TagButton>
        <TagButton scheme="positive">Positive</TagButton>
        <TagButton scheme="warning">Warning</TagButton>
        <TagButton scheme="neutral">Neutral</TagButton>
      </Grid>
      <Grid alignPrimary="center">
        <TagButton scheme="default" variant="secondary">
          Default
        </TagButton>
        <TagButton scheme="danger" variant="secondary">
          Danger
        </TagButton>
        <TagButton scheme="positive" variant="secondary">
          Positive
        </TagButton>
        <TagButton scheme="warning" variant="secondary">
          Warning
        </TagButton>
        <TagButton scheme="neutral" variant="secondary">
          Neutral
        </TagButton>
      </Grid>
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
