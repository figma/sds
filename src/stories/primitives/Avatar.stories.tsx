import type { Meta, StoryObj } from "@storybook/react";
import { placeholder } from "images";
import { Flex } from "layout";
import { Avatar, AvatarBlock, AvatarButton, AvatarGroup } from "primitives";
import "react";
import { ComponentProps } from "react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "SDS Primitives/Avatars",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryAvatar: StoryObj<
  Omit<ComponentProps<typeof Avatar>, "src"> & { "[image]": boolean }
> = {
  name: "Avatar",
  args: {
    "[image]": true,
  },
  render: (props) => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <Avatar
        src={props["[image]"] ? placeholder : undefined}
        initials="JA"
        size="small"
      />
      <Avatar src={props["[image]"] ? placeholder : undefined} initials="JA" />
      <Avatar
        src={props["[image]"] ? placeholder : undefined}
        initials="JA"
        square
        size="large"
      />
    </Flex>
  ),
};

export const StoryAvatarButton: StoryObj<typeof AvatarButton> = {
  name: "Avatar Button",
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <AvatarButton square size="small" src={placeholder} />
      <AvatarButton square src={placeholder} />
      <AvatarButton size="large" src={placeholder} />
    </Flex>
  ),
};

export const StoryAvatarBlock: StoryObj<typeof AvatarBlock> = {
  name: "Avatar Block",
  args: {},
  render: () => (
    <AvatarBlock title="Full Name" description="@fullname420">
      <AvatarButton square size="large" src={placeholder} />
    </AvatarBlock>
  ),
};

export const StoryAvatarGroup: StoryObj<typeof AvatarGroup> = {
  name: "Avatar Group",
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
    <AvatarGroup {...args}>
      <Avatar initials="JA" />
      <Avatar src={placeholder} />
      <Avatar initials="LO" />
      <Avatar src={placeholder} />
      <Avatar initials="WM" />
      <Avatar src={placeholder} />
    </AvatarGroup>
  ),
};
