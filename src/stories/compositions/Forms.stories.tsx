import { Meta, StoryObj } from "@storybook/react";
import { FormBox } from "compositions";
import { Button, ButtonGroup, CheckboxField, Form, InputField } from "primitives";

const meta: Meta<typeof FormBox> = {
  component: FormBox,
  title: "SDS Compositions/Forms",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryFormBox: StoryObj<typeof FormBox> = {
  name: "Forms",
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

export const StoryForm: StoryObj<typeof Form> = {
  name: "Form (no box) — fields stack with 24px gap",
  render: () => (
    <Form onSubmit={() => {}}>
      <InputField label="Name" />
      <InputField label="Email" />
      <ButtonGroup>
        <Button onPress={() => {}} variant="primary">
          Send
        </Button>
      </ButtonGroup>
    </Form>
  ),
};
