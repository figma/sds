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
} from "primitives";
import { ComponentProps } from "react";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "SDS Primitives/Tags",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryTag: StoryObj<
  Omit<ComponentProps<typeof Tag>, "onRemove"> & {
    "[removable]": boolean;
  }
> = {
  name: "Tag",
  args: { "[removable]": false, variant: "primary" },
  render: ({ "[removable]": isRemovable, ...args }) => (
    <Flex wrap alignPrimary="center" gap="300">
      <Tag
        scheme="brand"
        onRemove={isRemovable ? () => {} : undefined}
        {...args}
      >
        Default
      </Tag>
      <Tag
        scheme="danger"
        onRemove={isRemovable ? () => {} : undefined}
        {...args}
      >
        Danger
      </Tag>
      <Tag
        scheme="positive"
        onRemove={isRemovable ? () => {} : undefined}
        {...args}
      >
        Positive
      </Tag>
      <Tag
        scheme="warning"
        onRemove={isRemovable ? () => {} : undefined}
        {...args}
      >
        Warning
      </Tag>
      <Tag
        scheme="neutral"
        onRemove={isRemovable ? () => {} : undefined}
        {...args}
      >
        Neutral
      </Tag>
    </Flex>
  ),
};

export const StoryTagButton: StoryObj<typeof TagButton> = {
  name: "Tag Button",
  args: { variant: "primary" },
  render: (args) => (
    <Flex wrap alignPrimary="center" gap="300">
      <TagButton scheme="brand" {...args}>
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

export const StoryTagToggleGroup: StoryObj<typeof TagToggleGroup> = {
  name: "Tag Toggle Group",
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
