import type { Meta, StoryObj } from "@storybook/react";
import {
  FigmaUrlFromComponentName,
  COMPONENTS,
} from "./figmaComponents";

const meta: Meta<typeof FigmaUrlFromComponentName> = {
  component: FigmaUrlFromComponentName,
  title: "Figma/Components",
};
export default meta;
type Story = StoryObj<typeof FigmaUrlFromComponentName>;

export const UrlGenerator: Story = {
  args: {
    url: "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy",
    name: "Button",
    components: COMPONENTS,
  },
  argTypes: {
    name: {
      options: Object.keys(COMPONENTS).sort(),
      control: { type: "select" },
    },
  },
  render: ({ url, name, components }) => (
    <FigmaUrlFromComponentName url={url} name={name} components={components} />
  ),
};
