import figma from "@figma/code-connect";
import { Field } from "../Fieldset/Fieldset";
import { Select, SelectItem } from "./Select";

figma.connect(Select, "<FIGMA_URL_SELECT>", {
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

// TODO: Use Select Field
figma.connect(Field, "<FIGMA_URL_SELECT_FIELD>", {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Select",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <Field>{children}</Field>,
});