import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "ui";
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
    <Grid alignPrimary="center">
      <Tabs defaultSelectedKey="default" {...args}>
        <TabList>
          <Tab id="default">Default</Tab>
          <Tab id="danger">Danger</Tab>
          <Tab id="positive">Positive</Tab>
          <Tab id="warning">Warning</Tab>
          <Tab id="neutral">Nuetral</Tab>
        </TabList>
        <TabPanel id="default">
          <Grid>This is the default thing</Grid>
        </TabPanel>
        <TabPanel id="danger">
          <Grid>Some danger stuff</Grid>
        </TabPanel>
        <TabPanel id="positive">
          <Grid>Some positive stuff</Grid>
        </TabPanel>
        <TabPanel id="warning">
          <Grid>Some warning stuff</Grid>
        </TabPanel>
        <TabPanel id="neutral">
          <Grid>Some neutral stuff</Grid>
        </TabPanel>
      </Tabs>
    </Grid>
  ),
};
