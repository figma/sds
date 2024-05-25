import { IconActivity, IconArrowLeft } from "icons";
import { useEffect, useState } from "react";
import {
  Button,
  CheckboxField,
  CheckboxGroup,
  FieldGroup,
  Fieldset,
  Flex,
  FlexItem,
  InputField,
  Legend,
  RadioField,
  RadioGroup,
  SelectField,
  SelectItem,
  SwitchField,
  SwitchGroup,
  Text,
  TextAreaField,
} from "ui";

function App() {
  const [theme, setTheme] = useState("default");
  const items = [
    { id: 1, name: "Default" },
    { id: 2, name: "Purple" },
    { id: 3, name: "Blue" },
    { id: 4, name: "Teal" },
  ];

  function findThemeById(id: number) {
    return (
      items.find((item) => item.id === id)?.name || "default"
    ).toLowerCase();
  }

  useEffect(() => {
    document.body.className = `sds-scheme-color-${theme}`;
  }, [theme]);
  return (
    <Flex container direction="column" gap="xl">
      <FlexItem>
        <SelectField
          defaultSelectedKey={theme}
          placeholder="Select theme..."
          onSelectionChange={(key) =>
            setTheme(findThemeById(parseInt(key as string)))
          }
          items={items}
        >
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SelectField>
      </FlexItem>
      <FlexItem>
        <Flex gap="sm" alignPrimary="center" wrap>
          <Button>
            <IconArrowLeft />
            Hello world
            <IconActivity />
          </Button>
          <Button variant="secondary">
            <IconArrowLeft />
            Hello world
            <IconActivity />
          </Button>
          <Button variant="stroke">
            <IconArrowLeft />
            Hello world
            <IconActivity />
          </Button>
          <Button variant="subtle">
            <IconArrowLeft />
            Hello world
            <IconActivity />
          </Button>
        </Flex>
      </FlexItem>
      <FlexItem>
        <Fieldset>
          <Legend>Shipping details</Legend>
          <Text>Without this your odds of getting your order are low.</Text>
          <FieldGroup>
            <InputField
              placeholder="Street"
              name="street_address"
              label="Street address"
            />
            <SelectField label="Country" name="country">
              <SelectItem>Canada</SelectItem>
              <SelectItem>Mexico</SelectItem>
              <SelectItem>United States</SelectItem>
            </SelectField>
            <TextAreaField
              description="If you have a tiger, we'd like to know about it."
              placeholder="Delivery notes"
              name="notes"
              label="Delivery notes"
            />
          </FieldGroup>

          <RadioGroup
            label="Some stuff "
            description="It's just ok"
            defaultValue="Unique value"
          >
            <RadioField
              label="This is a radio"
              value="Unique value"
              description="Some text over here please and thank you will it wrap?"
            />
            <RadioField
              label="This is also a radio"
              value="Other Unique value"
            />
          </RadioGroup>

          <CheckboxGroup
            label="Some other stuff"
            description="It's kinda cool"
            defaultValue={["one"]}
          >
            <CheckboxField
              label="This is a checkbox"
              value="one"
              description="This is a checkbox description"
            />
            <CheckboxField
              label="This is also a checkbox"
              value="two"
              description="This is also a checkbox description"
            />
          </CheckboxGroup>

          <SwitchGroup>
            <SwitchField
              label="Enable"
              defaultSelected={true}
              description="Allow others to embed your event details on their own site"
            />
            <SwitchField
              label="Dont you love it"
              description="Something magical"
            />
          </SwitchGroup>
        </Fieldset>
      </FlexItem>
    </Flex>
  );
}
export default App;
