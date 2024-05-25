import type { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem } from "ui";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "ui/Flex",
  parameters: { layout: "centered" },
};
export default meta;

const renderChild = (text: string) => (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      padding: "0.5rem 1rem",
      background: "var(--sds-color-bg-brand-default)",
      color: "var(--sds-color-text-brand-onbrand)",
    }}
  >
    {text}
  </div>
);

export const Default: StoryObj<typeof Flex> = {
  args: {
    gap: "sm",
    type: "quarter",
    wrap: true,
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: [undefined, "xs", "sm", "md", "lg", "xl"],
    },
    type: {
      control: { type: "select" },
      options: ["quarter", "third"],
    },
  },
  render: (args) => (
    <Flex direction="column" gap="xl" container>
      <Flex {...args}>
        <FlexItem size="full">{renderChild("full")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
      </Flex>
      <Flex {...args}>
        <FlexItem size="full">{renderChild("full")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
      </Flex>
      <Flex {...args}>
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
      </Flex>
    </Flex>
  ),
};
