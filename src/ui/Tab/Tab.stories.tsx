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
          <Grid paddingY="sm">This is the default thing</Grid>
        </TabPanel>
        <TabPanel id="danger">
          <Grid paddingY="sm">Some danger stuff</Grid>
        </TabPanel>
        <TabPanel id="positive">
          <Grid paddingY="sm">Some positive stuff</Grid>
        </TabPanel>
        <TabPanel id="warning">
          <Grid paddingY="sm">Some warning stuff</Grid>
        </TabPanel>
        <TabPanel id="neutral">
          <Grid paddingY="sm">Some neutral stuff</Grid>
        </TabPanel>
      </Tabs>
    </Grid>
  ),
};
