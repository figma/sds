//www.figma.com/community/file/1380235722331273046

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HTMLIFrameElement> = {
  title: "SDS/Figma",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryFigma: StoryObj<{}> = {
  name: "Figma",
  render: () => (
    <iframe
      style={{
        border: "none",
        height: "calc(100vh - 2rem)",
        width: "calc(100vw - 2rem)",
      }}
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FJ0KLPKXiONDRssXD1AX9Oi%2FSimple-Design-System%3Fnode-id%3D480-6149%26t%3DxqLei3SMcoMAPJwF-1"
      allowFullScreen
    ></iframe>
  ),
};
