import type { Meta, StoryObj } from "@storybook/react";
import "react";
import {
  Avatar,
  AvatarBlock,
  AvatarButton,
  AvatarGroup,
} from "ui/Avatar/Avatar";
import { Description, Label } from "ui/Fieldset/Fieldset";
import { Flex } from "ui/Flex/Flex";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "ui/Avatar",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
type GroupStory = StoryObj<typeof AvatarGroup>;

export const Image: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="sm" alignSecondary="center">
      <Avatar src="https://picsum.photos/200" size="sm" />
      <Avatar src="https://picsum.photos/200" />
      <Avatar src="https://picsum.photos/200" square size="lg" />
    </Flex>
  ),
};

export const Initials: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="sm" alignSecondary="center">
      <Avatar initials="JA" size="sm" />
      <Avatar initials="JA" size="md" />
      <Avatar initials="JA" square size="lg" />
    </Flex>
  ),
};

export const Buttons: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="sm" alignSecondary="center">
      <AvatarButton square size="sm" src="https://picsum.photos/200" />
      <AvatarButton square src="https://picsum.photos/200" />
      <AvatarButton size="lg" src="https://picsum.photos/200" />
    </Flex>
  ),
};

export const Group: GroupStory = {
  args: {
    spacing: "sm",
    overlap: false,
    max: 3,
  },
  argTypes: {
    spacing: {
      options: ["sm", "md", "xs"],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => (
    <Flex alignPrimary="center" gap="sm" alignSecondary="center">
      <AvatarGroup {...args}>
        <Avatar initials="JA" />
        <Avatar src="https://picsum.photos/200" />
        <Avatar initials="LO" />
        <Avatar src="https://picsum.photos/200" />
        <Avatar initials="WM" />
        <Avatar src="https://picsum.photos/200" />
      </AvatarGroup>
    </Flex>
  ),
};

export const Block: Story = {
  args: {},
  render: () => (
    <AvatarBlock>
      <AvatarButton square size="lg" src="https://picsum.photos/200" />
      <Label>Full Name</Label>
      <Description>@fullname420</Description>
    </AvatarBlock>
  ),
};
