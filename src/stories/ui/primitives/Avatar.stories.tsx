import type { Meta, StoryObj } from "@storybook/react";
import "react";
import { Flex } from "ui/layout";
import {
  Avatar,
  AvatarBlock,
  AvatarButton,
  AvatarGroup,
  Description,
  Label,
} from "ui/primitives";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "UI Primitives/Avatar",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
type GroupStory = StoryObj<typeof AvatarGroup>;

export const Image: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="sm" alignSecondary="center">
      <Avatar src="https://placehold.co/200" size="sm" />
      <Avatar src="https://placehold.co/200" />
      <Avatar src="https://placehold.co/200" square size="lg" />
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
      <AvatarButton square size="sm" src="https://placehold.co/200" />
      <AvatarButton square src="https://placehold.co/200" />
      <AvatarButton size="lg" src="https://placehold.co/200" />
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
        <Avatar src="https://placehold.co/200" />
        <Avatar initials="LO" />
        <Avatar src="https://placehold.co/200" />
        <Avatar initials="WM" />
        <Avatar src="https://placehold.co/200" />
      </AvatarGroup>
    </Flex>
  ),
};

export const Block: Story = {
  args: {},
  render: () => (
    <AvatarBlock>
      <AvatarButton square size="lg" src="https://placehold.co/200" />
      <Label>Full Name</Label>
      <Description>@fullname420</Description>
    </AvatarBlock>
  ),
};
