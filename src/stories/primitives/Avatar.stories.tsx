import type { Meta, StoryObj } from "@storybook/react";
import { placeholder } from "images";
import { Flex } from "layout";
import { Avatar, AvatarBlock, AvatarButton, AvatarGroup } from "primitives";
import "react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "SDS Primitives/Avatar",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
type GroupStory = StoryObj<typeof AvatarGroup>;

export const Image: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <Avatar src={placeholder} size="small" />
      <Avatar src={placeholder} />
      <Avatar src={placeholder} square size="large" />
    </Flex>
  ),
};

export const Initials: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <Avatar initials="JA" size="small" />
      <Avatar initials="JA" size="medium" />
      <Avatar initials="JA" square size="large" />
    </Flex>
  ),
};

export const Buttons: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <AvatarButton square size="small" src={placeholder} />
      <AvatarButton square src={placeholder} />
      <AvatarButton size="large" src={placeholder} />
    </Flex>
  ),
};

export const Group: GroupStory = {
  args: {
    spacing: "200",
    max: 3,
  },
  argTypes: {
    spacing: {
      options: [
        "100",
        "200",
        "300",
        "negative-100",
        "negative-200",
        "negative-300",
      ],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <AvatarGroup {...args}>
        <Avatar initials="JA" />
        <Avatar src={placeholder} />
        <Avatar initials="LO" />
        <Avatar src={placeholder} />
        <Avatar initials="WM" />
        <Avatar src={placeholder} />
      </AvatarGroup>
    </Flex>
  ),
};

export const Block: Story = {
  args: {},
  render: () => (
    <AvatarBlock title="Full Name" description="@fullname420">
      <AvatarButton square size="large" src={placeholder} />
    </AvatarBlock>
  ),
};
