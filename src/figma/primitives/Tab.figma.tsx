import figma from "@figma/code-connect";
import { Tab, TabList, TabPanel, Tabs } from "primitives";

figma.connect(Tab, "<FIGMA_TABS_TAB>", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Tab id={label}>{label}</Tab>,
});

figma.connect(Tabs, "<FIGMA_TABS_TABS>", {
  props: {
    children: figma.children("Tab"),
  },
  example: ({ children }) => (
    <Tabs>
      <TabList>{children}</TabList>
      <TabPanel id="match-each-tab">Some stuff</TabPanel>
    </Tabs>
  ),
});
