import type { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem } from "ui/layout";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "UI Layout/Flex",
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
    wrap: true,
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: [undefined, "xs", "sm", "md", "lg", "xl"],
    },
  },
  render: (args) => (
    <Flex direction="column" gap="xl" container>
      <Flex {...args} type="quarter">
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
      <Flex {...args} type="third">
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
      </Flex>
      <Flex {...args} type="quarter">
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
