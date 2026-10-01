import type { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderAuth } from "compositions";
import { AllProviders } from "data";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "SDS Compositions/Headers",
  parameters: { layout: "fullscreen" },
  // Header reads auth state — it must be inside <AllProviders>
  decorators: [(Story) => <AllProviders><Story /></AllProviders>],
};
export default meta;

export const StoryHeader: StoryObj<typeof Header> = {
  name: "Header",
  render: (args) => <Header {...args} />,
};

export const StoryHeaderAuth: StoryObj<typeof HeaderAuth> = {
  name: "Header Auth",
  render: () => <HeaderAuth />,
};
