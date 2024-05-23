import figma from "@figma/code-connect";
import {
  Description,
  Field,
  FieldError,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "./Fieldset";

const FIGMA_URL_DESCRIPTION =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3084";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=15-8281"
const FIGMA_URL_LABEL =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3080";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=15-8186"
const FIGMA_URL_LEGEND =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3082";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=72-2062"
const FIGMA_URL_ERRORMESSAGE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3086";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=72-2071"
const FIGMA_URL_FIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3088";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=72-2081"
const FIGMA_URL_FIELDGROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3121";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=72-2249"
const FIGMA_URL_FIELDSET =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3127";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=72-2325"
const FIGMA_URL_FORM =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:3140";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=72-3001"

figma.connect(Description, FIGMA_URL_DESCRIPTION, {
  props: {
    description: figma.string("Description"),
  },
  example: ({ description }) => <Description>{description}</Description>,
});

figma.connect(Label, FIGMA_URL_LABEL, {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Label>{label}</Label>,
});

figma.connect(Legend, FIGMA_URL_LEGEND, {
  props: {
    legend: figma.string("Legend"),
  },
  example: ({ legend }) => <Legend>{legend}</Legend>,
});

figma.connect(FieldError, FIGMA_URL_ERRORMESSAGE, {
  props: {
    error: figma.string("Error"),
  },
  example: ({ error }) => <FieldError>{error}</FieldError>,
});

figma.connect(Field, FIGMA_URL_FIELD, {
  variant: { Type: "Input" },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Input",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <Field>{children}</Field>,
});

figma.connect(Field, FIGMA_URL_FIELD, {
  variant: { Type: "Select" },
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

figma.connect(Field, FIGMA_URL_FIELD, {
  variant: { Type: "Textarea" },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Textarea",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <Field>{children}</Field>,
});

figma.connect(FieldGroup, FIGMA_URL_FIELDGROUP, {
  props: {
    children: figma.children("Field"),
  },
  example: ({ children }) => <FieldGroup>{children}</FieldGroup>,
});

figma.connect(Fieldset, FIGMA_URL_FIELDSET, {
  props: {
    children: figma.children([
      "Legend",
      "Description",
      "Field Group",
      "Button",
    ]),
  },
  example: ({ children }) => <Fieldset>{children}</Fieldset>,
});

// Stubbed out fake connect doc while children is broken.

// function Form() {}

// figma.connect(Form, FIGMA_URL_FORM, {
//   props: {
//     legend: figma.children("Legend"),
//     description: figma.children("Description"),
//     input: figma.children("Input"),
//     select: figma.children("Select"),
//     textarea: figma.children("Textarea"),
//     checkbox: figma.children("Checkbox"),
//     button: figma.children("Button"),
//     descriptionCheckbox: figma.string("Description Checkbox"),
//     textCheckbox: figma.string("Text Checkbox"),
//     descriptionSwitch: figma.string("Description Switch"),
//     textSwitch: figma.string("Text Switch"),
//     descriptionCountry: figma.string("Description Country"),
//     textCountry: figma.string("Text Country"),
//     textDeliveryNotes: figma.string("Text Delivery Notes"),
//     textFullName: figma.string("Text Full Name"),
//   },
//   example: (props) => (
//     <Fieldset>
//       {props.legend}
//       {props.description}
//       <FieldGroup>
//         <Field>
//           <Label>{props.textFullName}</Label>
//           {props.input}
//         </Field>
//         <Field>
//           <Label>{props.textCountry}</Label>
//           {props.select}
//           <Description>{props.descriptionCountry}</Description>
//         </Field>
//         <Field>
//           <Label>{props.textDeliveryNotes}</Label>
//           {props.textarea}
//         </Field>
//         <Switch>
//           <Label>{props.textSwitch}</Label>
//           <Description>{props.descriptionSwitch}</Description>
//         </Switch>
//         <Checkbox>
//           <Label>{props.textCheckbox}</Label>
//           {props.checkbox}
//           <Description>{props.descriptionCheckbox}</Description>
//         </Checkbox>
//       </FieldGroup>
//       {props.button}
//     </Fieldset>
//   ),
// });
