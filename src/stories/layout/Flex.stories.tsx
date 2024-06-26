import type { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem } from "layout";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "SDS Layout/Flex",
  parameters: { layout: "centered" },
};
export default meta;

const renderChild = (text: string) => (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      padding: "0.5rem 1rem",
      background: "var(--sds-color-background-brand-default)",
      color: "var(--sds-color-text-brand-on-brand)",
    }}
  >
    {text}
  </div>
);

export const StoryFlex: StoryObj<typeof Flex> = {
  name: "Flex",
  args: {
    gap: "200",
    wrap: true,
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: [undefined, "100", "200", "300", "400", "600", "800"],
    },
  },
  render: (args) => (
    <Flex direction="column" gap="600">
      <Flex {...args} container type="quarter">
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
      <Flex {...args} container type="third">
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
      <Flex {...args} container type="quarter">
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
