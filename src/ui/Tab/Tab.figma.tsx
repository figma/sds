import figma from "@figma/code-connect";
import { Tab, TabList, TabPanel, Tabs } from "./Tab";

const FIGMA_URL_TAB =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=3729-12963&t=Rnfd6fBILKf5apxJ-11";
const FIGMA_URL_TABS =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=3729-13362&t=fdRRaUvHCwmaI7ea-11";

figma.connect(Tab, FIGMA_URL_TAB, {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Tab id={label}>{label}</Tab>,
});

figma.connect(Tabs, FIGMA_URL_TABS, {
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
