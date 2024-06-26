import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabPanel, Tabs } from "primitives";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "SDS Primitives/Tabs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const StoryTabs: Story = {
  name: "Tabs",
  args: {},
  argTypes: {},
  render: (args) => (
    <Tabs defaultSelectedKey="default" {...args}>
      <TabList>
        <Tab id="default">Default</Tab>
        <Tab id="danger">Danger</Tab>
        <Tab id="positive">Positive</Tab>
        <Tab id="warning">Warning</Tab>
        <Tab id="neutral">Nuetral</Tab>
      </TabList>
      <TabPanel id="default">This is the default thing</TabPanel>
      <TabPanel id="danger">Some danger stuff</TabPanel>
      <TabPanel id="positive">Some positive stuff</TabPanel>
      <TabPanel id="warning">Some warning stuff</TabPanel>
      <TabPanel id="neutral">Some neutral stuff</TabPanel>
    </Tabs>
  ),
};
