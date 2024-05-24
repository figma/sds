import type { Meta, StoryObj } from "@storybook/react";
import "react";
import {
  Avatar,
  AvatarBlock,
  AvatarButton,
  AvatarGroup,
} from "ui/Avatar/Avatar";
import { Description, Label } from "ui/Fieldset/Fieldset";
import { Grid } from "ui/Layout/Layout";

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
    <Grid alignPrimary="center">
      <Avatar src="https://picsum.photos/200" size="sm" />
      <Avatar src="https://picsum.photos/200" />
      <Avatar src="https://picsum.photos/200" square size="lg" />
    </Grid>
  ),
};

export const Initials: Story = {
  args: {},
  render: () => (
    <Grid alignPrimary="center">
      <Avatar initials="JA" size="sm" />
      <Avatar initials="JA" size="md" />
      <Avatar initials="JA" square size="lg" />
    </Grid>
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
    <Grid alignPrimary="center">
      <AvatarGroup {...args}>
        <Avatar initials="JA" />
        <Avatar src="https://picsum.photos/200" />
        <Avatar initials="LO" />
        <Avatar src="https://picsum.photos/200" />
        <Avatar initials="WM" />
        <Avatar src="https://picsum.photos/200" />
      </AvatarGroup>
    </Grid>
  ),
};

export const Block: Story = {
  args: {},
  render: () => (
    <Grid alignPrimary="center">
      <AvatarBlock>
        <AvatarButton square size="lg" src="https://picsum.photos/200" />
        <Label>Full Name</Label>
        <Description>@fullname420</Description>
      </AvatarBlock>
    </Grid>
  ),
};

export const Buttons: Story = {
  args: {},
  render: () => (
    <Grid alignPrimary="center">
      <AvatarButton square size="sm" src="https://picsum.photos/200" />
      <AvatarButton square src="https://picsum.photos/200" />
      <AvatarButton size="lg" src="https://picsum.photos/200" />
    </Grid>
  ),
};
