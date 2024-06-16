import type { Meta, StoryObj } from "@storybook/react";
import { Image, Picture, PictureSource } from "ui";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "SDS UI/Image",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Image> = {
  args: { size: "medium" },
  render: (args) => (
    <div
      style={{
        height: "calc(100vh - 2rem)",
        display: "grid",
        placeItems: "center",
        width: "100%",
      }}
    >
      <Image src="https://placehold.co/500x300/f0f0f0/ddd?text=SDS" {...args} />
    </div>
  ),
};

export const SrcSet: StoryObj<typeof Image> = {
  render: (args) => (
    <Image
      src="https://placehold.co/500/f0f0f0/ddd?text=SDS"
      srcSet="https://placehold.co/500/f0f0f0/ddd?text=SDS 500w, https://placehold.co/1001/f0f0f0/ddd?text=SDS 1001w"
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
        srcSet="https://placehold.co/500/f0f0f0/ddd?text=SDS"
      />
      <PictureSource
        media="(min-width: 500px)"
        srcSet="https://placehold.co/1000x500/f0f0f0/ddd?text=SDS"
      />
      <Image
        src="https://placehold.co/1000x500/f0f0f0/ddd?text=SDS"
        alt="Magical thing"
      />
    </Picture>
  ),
};
