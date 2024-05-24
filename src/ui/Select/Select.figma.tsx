import figma from "@figma/code-connect";
import { Select, SelectField, SelectItem } from "./Select";

const FIGMA_URL_SELECT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1162";
const FIGMA_URL_SELECT_FIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2136-2336&m=dev";

figma.connect(Select, FIGMA_URL_SELECT, {
  props: {
    value: figma.string("Value"),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
    item1: figma.string("Value"),
    item2: figma.string("Option 2"),
    item3: figma.string("Option 3"),
    item4: figma.string("Option 4"),
    item5: figma.string("Option 5"),
  },
  example: ({ isDisabled, value, item1, item2, item3, item4, item5 }) => (
    <Select
      isDisabled={isDisabled}
      defaultSelectedKey={value}
      placeholder="Select theme..."
    >
      <SelectItem>{item1}</SelectItem>
      <SelectItem>{item2}</SelectItem>
      <SelectItem>{item3}</SelectItem>
      <SelectItem>{item4}</SelectItem>
      <SelectItem>{item5}</SelectItem>
    </Select>
  ),
});

figma.connect(SelectField, FIGMA_URL_SELECT_FIELD, {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Select",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <SelectField>{children}</SelectField>,
});
