import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Section } from "layout";
import {
  Text,
  TextCode,
  TextEmphasis,
  TextHeading,
  TextLink,
  TextLinkList,
  TextList,
  TextListItem,
  TextPrice,
  TextSmall,
  TextSmallStrong,
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

export const StoryText: Story = {
  name: "Text",
  args: {},
  render: () => {
    return (
      <Section padding="1600">
        <Flex container direction="column" gap="400">
          <TextTitleHero>Text Title Hero</TextTitleHero>
          <TextTitlePage>Text Title Page</TextTitlePage>
          <TextSubtitle>Text Subtitle</TextSubtitle>
          <TextHeading>Text Heading</TextHeading>
          <TextSubheading>Text Subheading</TextSubheading>
          <Text>Text</Text>
          <TextEmphasis>Text Emphasis</TextEmphasis>
          <TextLink href="#">Text Link</TextLink>
          <TextStrong>Text Strong</TextStrong>
          <TextSmall>Text Small</TextSmall>
          <TextSmallStrong>Text Small Strong</TextSmallStrong>
          <TextCode>Text Code</TextCode>
          <TextList>
            <TextListItem>Text List Item 1</TextListItem>
            <TextListItem>Text List Item 2</TextListItem>
            <TextListItem>Text List Item 3</TextListItem>
          </TextList>
          <TextLinkList>
            <TextListItem>
              <TextLink href="#">Text Link List Item 1</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Text Link List Item 2</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Text Link List Item 3</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextPrice currency="$" price="50.99" label="/ mo" />
          <TextPrice currency="$" price="50.99" label="/ mo" size="small" />
          <Text>
            This feature is only available to users on the{" "}
            <TextStrong>Business Plan</TextStrong>. To upgrade, visit your{" "}
            <TextLink href="#">billing settings</TextLink>. Your api key is{" "}
            <TextCode>fig_123456789</TextCode>.
          </Text>
        </Flex>
      </Section>
    );
  },
};
