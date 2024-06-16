import figma from "@figma/code-connect";
import { Field } from "../Fieldset/Fieldset";
import { Select, SelectField, SelectItem } from "./Select";

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

figma.connect(Field, "<FIGMA_URL_SELECT_FIELD>", {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    label: figma.boolean("Has Label", {
      true: figma.string("Label"),
      false: undefined,
    }),
    errorMessage: figma.boolean("Has Error Message", {
      true: figma.string("Error Message"),
      false: undefined,
    }),
    select: figma.children("Select"),
  },
  example: ({ description, label, errorMessage, select }) => (
    <SelectField
      label={label}
      description={description}
      errorMessage={errorMessage}
    >
      {select}
    </SelectField>
  ),
});
