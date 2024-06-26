import { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem, Section } from "layout";
import {
  Logo,
  Text,
  TextHeading,
  TextLink,
  TextLinkList,
  TextListItem,
} from "primitives";

const meta: Meta<typeof HTMLIFrameElement> = {
  title: "SDS/Hello",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryHello: StoryObj<{}> = {
  name: "Hello",
  render: () => (
    <Section>
      <Flex container type="third" alignPrimary="center">
        <FlexItem size="major">
          <Flex direction="column" gap="300">
            <Logo />
            <TextHeading>Figma Simple Design System</TextHeading>
            <Text>
              Simple Design System (SDS) is a base design system that shows how
              Figma’s Variables, Styles, Components, and Code Connect can be
              used alongside a React and CSS codebase to form a complete picture
              of a responsive web design system.
            </Text>

            <Text>
              SDS is not just another design system. There are still many gaps
              between design and development, and SDS provides some best
              practices for how to bridge them. SDS attempts to remain honest
              about its implications in code, while also offering
              customizability in design beyond a simple theming layer that is
              typical of many code-first component libraries.
            </Text>

            <Text>
              Whether you’re looking to use SDS to start a new project, or are
              looking for examples of some common design systems best practices,
              you'll find tools inside this codebase and Figma file to steer you
              in the right direction.
            </Text>

            <TextLinkList density="tight">
              <TextListItem>
                <TextLink href="https://github.com/figma/sds">
                  GitHub SDS Repo
                </TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.figma.com/community/file/1380235722331273046">
                  Figma Community File
                </TextLink>
              </TextListItem>
            </TextLinkList>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
};
