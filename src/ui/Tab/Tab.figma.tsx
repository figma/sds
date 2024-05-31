import figma from "@figma/code-connect";
import { Tab, TabList, TabPanel, Tabs } from "./Tab";

figma.connect(Tab, "<FIGMA_URL_TAB>", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Tab id={label}>{label}</Tab>,
});

figma.connect(Tabs, "<FIGMA_URL_TABS>", {
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
