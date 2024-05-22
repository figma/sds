import type { Meta, StoryObj } from "@storybook/react";
import { Image, Picture, PictureSource } from "ui/Image/Image";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "ui/Image",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Image> = {
  args: {
    aspectRatio: "auto",
  },
  argTypes: {
    aspectRatio: {
      control: { type: "select" },
      options: ["1-1", "16-9", "4-3", "auto"],
    },
  },
  render: (args) => (
    <Image
      src="https://picsum.photos/500"
      srcSet="https://picsum.photos/500 500w, https://picsum.photos/1001 1001w"
      sizes="(max-width: 700px) 500w, 1000w"
      {...args}
    />
  ),
};

export const DefaultPicture: StoryObj<typeof Picture> = {
  args: {},
  argTypes: {},
  render: () => (
    <Picture>
      <PictureSource
        media="(max-width: 499px)"
        srcSet="https://picsum.photos/500"
      />
      <PictureSource
        media="(min-width: 500px)"
        srcSet="https://picsum.photos/1000/500"
      />
      <Image src="https://picsum.photos/1000/500" alt="Magical thing" />
    </Picture>
  ),
};
