import figma from "@figma/code-connect";
import {
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "./Fieldset";

figma.connect(Description, "<FIGMA_URL_DESCRIPTION>", {
  props: {
    description: figma.string("Description"),
  },
  example: ({ description }) => <Description>{description}</Description>,
});

figma.connect(Label, "<FIGMA_URL_LABEL>", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Label>{label}</Label>,
});

figma.connect(Legend, "<FIGMA_URL_LEGEND>", {
  props: {
    legend: figma.string("Legend"),
  },
  example: ({ legend }) => <Legend>{legend}</Legend>,
});

figma.connect(FieldError, "<FIGMA_URL_ERROR_MESSAGE>", {
  props: {
    error: figma.string("Error"),
  },
  example: ({ error }) => <FieldError>{error}</FieldError>,
});

figma.connect(FieldGroup, "<FIGMA_URL_FIELD_GROUP>", {
  props: {
    children: figma.children([
      "Input Field",
      "Select Field",
      "Text Area Field",
      "Switch Group",
      "Checkbox Group",
      "Radio Group",
      "Checkbox Field",
    ]),
  },
  example: ({ children }) => <FieldGroup>{children}</FieldGroup>,
});

figma.connect(Fieldset, "<FIGMA_URL_FIELDSET>", {
  props: {
    children: figma.children([
      "Legend",
      "Description",
      "Field Group",
      "Button Group",
    ]),
  },
  example: ({ children }) => <Fieldset>{children}</Fieldset>,
});
