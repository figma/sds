import figma from "@figma/code-connect";
import { ListBox, ListBoxItem } from "./ListBox";

const FIGMA_URL_LISTBOX =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:792";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=29-2318"
// const FIGMA_URL_LISTBOXLABEL =
//   "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:771";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=29-1942"
// const FIGMA_URL_LISTBOXDESCRIPTION =
//   "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:769";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=29-1946"
const FIGMA_URL_LISTBOXITEM =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:773";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=29-1812"

figma.connect(ListBox, FIGMA_URL_LISTBOX, {
  props: {
    children: figma.boolean("Show Options", {
      true: figma.children(["ListBox Option", "ListBox Menu"]),
      false: <ListBoxItem>Toggle Show Options to see all options</ListBoxItem>,
    }),
  },
  example: ({ children }) => <ListBox>{children}</ListBox>,
});
figma.connect(ListBoxItem, FIGMA_URL_LISTBOXITEM, {
  props: {
    children: figma.children([
      "Avatar",
      "ListBox Label",
      "ListBox Description",
      "Icon",
    ]),
  },
  example: ({ children }) => (
    <ListBoxItem value={{ value: "unique value" }}>{children}</ListBoxItem>
  ),
});
