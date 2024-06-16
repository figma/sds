import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "layout";
import {
  Text,
  TextCode,
  TextEmphasis,
  TextHeading,
  TextLink,
  TextList,
  TextListItem,
  TextPrice,
  TextSmall,
  TextStrong,
  TextSubheading,
  TextSubtitle,
  TextTitleHero,
  TextTitlePage,
} from "primitives";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "SDS Primitives/Text",
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Flex direction="column" gap="400">
        <TextTitleHero>TextTitleHero</TextTitleHero>
        <TextTitlePage>TextTitlePage</TextTitlePage>
        <TextSubtitle>TextSubtitle</TextSubtitle>
        <TextHeading>TextHeading</TextHeading>
        <TextSubheading>TextSubheading</TextSubheading>
        <Text>Text</Text>
        <TextEmphasis>TextEmphasis</TextEmphasis>
        <TextLink href="#">TextLink</TextLink>
        <TextStrong>TextStrong</TextStrong>
        <TextSmall>TextSmall</TextSmall>
        <TextCode>TextCode</TextCode>
        <TextList>
          <TextListItem>TextListItem 1</TextListItem>
          <TextListItem>TextListItem 2</TextListItem>
          <TextListItem>TextListItem 3</TextListItem>
        </TextList>

        <TextPrice currency="$" price="50.99" label="/ month" />

        <Text>
          This feature is only available to users on the{" "}
          <TextStrong>Business Plan</TextStrong>. To upgrade, visit your{" "}
          <TextLink href="#">billing settings</TextLink>. Your api key is{" "}
          <TextCode>fig_123456789</TextCode>.
        </Text>
      </Flex>
    );
  },
};
