import type { Meta, StoryObj } from "@storybook/react";
import { IconAirplay, IconCheck } from "icons";
import { Flex } from "layout";
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
  title: "SDS UI/Tag",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Tag> = {
  args: { variant: "default" },
  render: (args) => (
    <Flex wrap alignPrimary="center" gap="300">
      <Tag scheme="default" {...args}>
        Default
      </Tag>
      <Tag scheme="danger" {...args}>
        Danger
      </Tag>
      <Tag scheme="positive" {...args}>
        Positive
      </Tag>
      <Tag scheme="warning" {...args}>
        Warning
      </Tag>
      <Tag scheme="neutral" {...args}>
        Neutral
      </Tag>
    </Flex>
  ),
};

export const Removable: StoryObj<typeof Tag> = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Flex wrap gap="300">
      <Tag onRemove={() => {}} scheme="default" {...args}>
        Default
      </Tag>
      <Tag onRemove={() => {}} scheme="danger" {...args}>
        Danger
      </Tag>
      <Tag onRemove={() => {}} scheme="positive" {...args}>
        Positive
      </Tag>
      <Tag onRemove={() => {}} scheme="warning" {...args}>
        Warning
      </Tag>
      <Tag onRemove={() => {}} scheme="neutral" {...args}>
        Neutral
      </Tag>
    </Flex>
  ),
};

export const TagButtonDefault: StoryObj<typeof TagButton> = {
  args: { variant: "default" },
  render: (args) => (
    <Flex wrap alignPrimary="center" gap="300">
      <TagButton scheme="default" {...args}>
        Default
      </TagButton>
      <TagButton scheme="danger" {...args}>
        Danger
      </TagButton>
      <TagButton scheme="positive" {...args}>
        Positive
      </TagButton>
      <TagButton scheme="warning" {...args}>
        Warning
      </TagButton>
      <TagButton scheme="neutral" {...args}>
        Neutral
      </TagButton>
    </Flex>
  ),
};

export const TagToggleDefault: StoryObj<typeof TagToggleGroup> = {
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
    <Flex wrap alignPrimary="center">
      <TagToggleGroup defaultSelectedKeys={["default"]} {...args}>
        <Label>Hello there</Label>
        <TagToggleList>
          <TagToggle id="default" iconStart={<IconCheck />}>
            Default
          </TagToggle>
          <TagToggle iconStart={<IconAirplay />}>Hello</TagToggle>
          <TagToggle>Love</TagToggle>
          <TagToggle>This</TagToggle>
          <TagToggle>Story</TagToggle>
        </TagToggleList>
      </TagToggleGroup>
    </Flex>
  ),
};
