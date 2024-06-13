import type { Meta, StoryObj } from "@storybook/react";
import useMediaQuery from "hooks/useMediaQuery";

function Example() {
  const output = useMediaQuery();
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}

const meta: Meta<typeof Example> = {
  component: Example,
  title: "UI Layout/useMediaQuery",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Example> = {
  render: () => <Example />,
};
