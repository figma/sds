import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ButtonGroup,
  CheckboxField,
  CheckboxGroup,
  FieldGroup,
  Fieldset,
  Form,
  InputField,
  Legend,
  RadioField,
  RadioGroup,
  SelectField,
  SelectItem,
  SliderField,
  Text,
  TextareaField,
  formEventTargetToFormData,
} from "primitives";
import { useState } from "react";

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Fieldset>;

export const StoryFieldset: Story = {
  name: "Fieldset",
  args: {
    disabled: false,
  },
  render: (args) => {
    const [output, setOutput] = useState("");
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const data = formEventTargetToFormData(e.currentTarget);
          setOutput(JSON.stringify(data, null, 2));
        }}
      >
        <Fieldset disabled={args.disabled}>
          <Legend>Shipping details</Legend>
          <Text>Without this your odds of getting your order are low.</Text>
          <FieldGroup>
            <InputField
              isRequired
              name="address"
              defaultValue="123 Example Ln."
              label="Street address"
              description="Hello there"
            />
            <SelectField
              isRequired
              name="country"
              defaultSelectedKey="us"
              label="Country"
              description="I am a select description"
            >
              <SelectItem id="ca">Canada</SelectItem>
              <SelectItem id="mx">Mexico</SelectItem>
              <SelectItem id="us">United States</SelectItem>
            </SelectField>
            <SliderField
              name="range"
              label="Slide here"
              description="i love this for us"
              defaultValue={[0, 40]}
              showOutput
            />
            <TextareaField
              isRequired
              defaultValue="Watch out"
              name="notes"
              label="Delivery notes"
              isResizable={false}
              description="If you have a tiger, we'd like to know about it."
            />
            <CheckboxGroup name="checkboxes">
              <CheckboxField value="one" label="One" />
              <CheckboxField value="two" label="Two" />
            </CheckboxGroup>
            <RadioGroup name="radios">
              <RadioField value="one" label="One" />
              <RadioField value="two" label="Two" />
            </RadioGroup>
            <CheckboxField
              isRequired
              name="agree"
              label="Do you agreee?"
              description="We hope you do"
            />
          </FieldGroup>
          <ButtonGroup>
            <Button type="submit">Submit</Button>
          </ButtonGroup>
        </Fieldset>
        {output && <pre>{output}</pre>}
      </Form>
    );
  },
};
