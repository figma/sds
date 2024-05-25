import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabPanel, Tabs } from "./Tab";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "ui/Tabs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
  argTypes: {},
  render: (args) => (
    <Layout alignPrimary="center">
      <Tabs defaultSelectedKey="default" {...args}>
        <TabList>
          <Tab id="default">Default</Tab>
          <Tab id="danger">Danger</Tab>
          <Tab id="positive">Positive</Tab>
          <Tab id="warning">Warning</Tab>
          <Tab id="neutral">Nuetral</Tab>
        </TabList>
        <TabPanel id="default">
          <Layout>This is the default thing</Layout>
        </TabPanel>
        <TabPanel id="danger">
          <Layout>Some danger stuff</Layout>
        </TabPanel>
        <TabPanel id="positive">
          <Layout>Some positive stuff</Layout>
        </TabPanel>
        <TabPanel id="warning">
          <Layout>Some warning stuff</Layout>
        </TabPanel>
        <TabPanel id="neutral">
          <Layout>Some neutral stuff</Layout>
        </TabPanel>
      </Tabs>
    </Layout>
  ),
};
