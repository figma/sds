import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import { Accordion, AccordionItem, TextContentHeading } from "primitives";

export function FAQs() {
  const { isMobile } = useMediaQuery();
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";
  return (
    <Section padding={sectionPadding} variant="neutral">
      <Flex container direction="column" alignSecondary="stretch" gap={flexGap}>
        <TextContentHeading
          align="center"
          heading="Frequently Asked Questions"
          subheading="Find answers to common questions about Simple Design System"
        />
        <Flex container type="third" alignPrimary="center">
          <FlexItem size="major">
            <Accordion>
              <AccordionItem title="What is Simple Design System (SDS)?">
                SDS is a React-based design system that provides accessible,
                production-ready UI components, design tokens, and Figma
                integration for demonstrating how to build consistent user
                interfaces efficiently.
              </AccordionItem>
              <AccordionItem title="How do I install SDS in my project?">
                It is not distributed yet, but you can use it directly, by
                cloning the repository at{" "}
                <a href="https://github.com/figma/sds">github.com/figma/sds</a>.
                Refer to the documentation for setup instructions and usage
                examples.
              </AccordionItem>
              <AccordionItem title="Does SDS support dark mode?">
                Yes, SDS includes full support for light and dark modes using
                CSS custom properties. It automatically adapts to the user's
                system preferences.
              </AccordionItem>
              <AccordionItem title="Can I customize the design tokens?">
                Absolutely! All design tokens are defined as CSS variables in{" "}
                <code>theme.css</code>. You can override them in your
                application to match your brand.
              </AccordionItem>
              <AccordionItem title="Where can I find component documentation?">
                Comprehensive documentation and usage examples are available in
                the Storybook at{" "}
                <a href="https://figma.github.io/sds/storybook">
                  figma.github.io/sds/storybook
                </a>
                .
              </AccordionItem>
            </Accordion>
          </FlexItem>
        </Flex>
      </Flex>
    </Section>
  );
}
