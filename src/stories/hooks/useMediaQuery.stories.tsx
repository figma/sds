import type { Meta, StoryObj } from "@storybook/react";
import { useMediaQuery } from "hooks";

function Example() {
  const output = useMediaQuery();
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}

const meta: Meta<typeof Example> = {
  component: Example,
  title: "SDS Hooks/useMediaQuery",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryUseMediaQuery: StoryObj<typeof Example> = {
  name: "useMediaQuery",
  render: () => <Example />,
};
