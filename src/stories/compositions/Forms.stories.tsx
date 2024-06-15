import { Meta, StoryObj } from "@storybook/react";
import { FormBox } from "compositions";
import { Button, ButtonGroup, CheckboxField, InputField } from "ui";

const meta: Meta<typeof FormBox> = {
  component: FormBox,
  title: "SDS Compositions/Forms",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof FormBox> = {
  render: (args) => (
    <FormBox {...args} onSubmit={() => {}}>
      <InputField label="Email" />
      <InputField label="Password" />
      <CheckboxField label="Label" description="Description" />
      <ButtonGroup align="justify">
        <Button onPress={() => {}} variant="primary">
          Register
        </Button>
      </ButtonGroup>
    </FormBox>
  ),
};
