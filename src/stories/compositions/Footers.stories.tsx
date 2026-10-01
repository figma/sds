import { Meta, StoryObj } from "@storybook/react";
import { Footer, SocialButtons } from "compositions";
import { IconLinkedin } from "icons";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "SDS Compositions/Footers",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const StoryFooterDefault: StoryObj<typeof Footer> = {
  name: "Footer — default (matches Figma)",
  render: (args) => <Footer {...args} />,
};

export const StoryFooterCustom: StoryObj<typeof Footer> = {
  name: "Footer — custom columns and social",
  render: (args) => (
    <Footer
      {...args}
      columns={[
        {
          title: "Product",
          links: [
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ],
        },
        { title: "Company", links: [{ label: "About", href: "#" }] },
      ]}
      social={
        <SocialButtons
          links={[
            { label: "LinkedIn", href: "#", icon: <IconLinkedin /> },
          ]}
        />
      }
    />
  ),
};

export const StoryFooterBrand: StoryObj<typeof Footer> = {
  name: "Footer — brand variant",
  render: (args) => <Footer {...args} variant="brand" />,
};

export const StorySocialButtons: StoryObj<typeof SocialButtons> = {
  name: "Social Buttons",
  render: () => <SocialButtons />,
};
