import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { ComponentProps } from "react";
import {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarGroup,
  Button,
  Checkbox,
  CheckboxField,
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
  IconButton,
  InputField,
  SelectField,
  SelectItem,
  Text,
  TextAreaField,
  TextSubtitle,
} from "ui/primitives";

function Figma() {
  return <>Figma</>;
}

const meta: Meta<typeof Figma> = {
  component: Figma,
  title: "_figma/Preview",
  parameters: { layout: "centered" },
};
export default meta;

export const AccordionStory: StoryObj<typeof Accordion> = {
  args: {},
  render: () => (
    <Accordion>
      <AccordionItem title="Your files">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Shared with you">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Last item" hasChildItems={false}>
        <TextSubtitle>Subtitle</TextSubtitle>
        <Text>
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionItemStory: StoryObj<typeof AccordionItem> = {
  args: { children: "Your files" },
  render: ({ children }) => (
    <Accordion>
      <AccordionItem title={children}>
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
    </Accordion>
  ),
};

export const AvatarStory: StoryObj<
  ComponentProps<typeof Avatar> & {
    shape: "square" | "circle";
    type: "initials" | "image";
  }
> = {
  args: {
    size: "md",
    shape: "square",
    type: "image",
  },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    shape: { control: { type: "select" }, options: ["square", "circle"] },
    type: { control: { type: "select" }, options: ["initials", "image"] },
  },
  render: ({ shape, type, ...args }) => (
    <Avatar
      initials={type === "initials" ? "JA" : undefined}
      src={type === "image" ? "https://placehold.co/200" : undefined}
      square={shape === "square"}
      {...args}
    />
  ),
};

export const AvatarGroupStory: StoryObj<
  Omit<ComponentProps<typeof AvatarGroup>, "spacing"> & {
    spacing: "spaced" | "overlap";
  }
> = {
  args: {
    spacing: "spaced",
  },
  argTypes: {
    spacing: { control: { type: "select" }, options: ["spaced", "overlap"] },
  },
  render: ({ spacing, ...args }) => (
    <AvatarGroup
      spacing={spacing === "spaced" ? "xs" : "sm"}
      overlap={spacing === "overlap"}
      max={3}
      {...args}
    >
      <Avatar src="https://placehold.co/200" />
      <Avatar src="https://placehold.co/201" />
      <Avatar src="https://placehold.co/202" />
      <Avatar src="https://placehold.co/203" />
      <Avatar src="https://placehold.co/204" />
      <Avatar src="https://placehold.co/205" />
    </AvatarGroup>
  ),
};

export const ButtonStory: StoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    isDisabled: false,
    size: "medium",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </Button>
  ),
};

export const CheckboxStory: StoryObj<
  ComponentProps<typeof Checkbox> & {
    state:
      | "checked"
      | "disabled"
      | "indeterminate"
      | "unchecked"
      | "checked-disabled";
  }
> = {
  args: {
    state: "checked",
  },
  argTypes: {
    state: {
      control: { type: "select" },
      options: [
        "checked",
        "disabled",
        "indeterminate",
        "unchecked",
        "checked-disabled",
      ],
    },
  },
  render: ({ state, ...args }) => (
    <Checkbox
      data-disabled={
        ["disabled", "checked-disabled"].includes(state) || undefined
      }
      data-indeterminate={state === "indeterminate" || undefined}
      data-selected={
        ["checked", "indeterminate", "checked-disabled"].includes(state) ||
        undefined
      }
      {...args}
    />
  ),
};

export const CheckboxFieldStory: StoryObj<
  ComponentProps<typeof CheckboxField> & {
    state: "default" | "disabled";
  }
> = {
  args: {
    state: "default",
  },
  argTypes: {
    state: { control: { type: "select" }, options: ["default", "disabled"] },
  },
  render: ({ state, ...args }) => (
    <CheckboxField
      label="I am a label"
      description="I am a description"
      isDisabled={state === "disabled"}
      {...args}
    />
  ),
};

export const DialogStory: StoryObj<typeof Dialog> = {
  render: () => (
    <Dialog>
      <DialogTitle>Open Dialog</DialogTitle>
      <DialogDescription>
        The refund will be reflected in the customer’s bank account 2 to 3
        business days after processing.
      </DialogDescription>
      <DialogBody>
        <InputField name="amount" label="Amount" placeholder="$0.00" />
      </DialogBody>
      <DialogActions>
        <Button>Refund</Button>
        <Button variant="subtle">Cancel</Button>
      </DialogActions>
    </Dialog>
  ),
};

export const FieldStory: StoryObj<{
  state: "default" | "disabled";
  type: "input" | "select" | "textarea";
}> = {
  args: {
    state: "default",
    type: "input",
  },
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "disabled"],
    },
    type: {
      control: { type: "select" },
      options: ["input", "select", "textarea"],
    },
  },
  render: ({ state, type }) => {
    switch (type) {
      case "input":
        return (
          <InputField
            label="I am a label"
            description="I am a description"
            placeholder="Value goes here"
            isDisabled={state === "disabled"}
          />
        );
      case "select":
        return (
          <SelectField
            label="I am a label"
            description="I am a description"
            placeholder="Value goes here"
            isDisabled={state === "disabled"}
          >
            <SelectItem>Hello there</SelectItem>
          </SelectField>
        );
      case "textarea":
      default:
        return (
          <TextAreaField
            label="I am a label"
            description="I am a description"
            placeholder="Value goes here"
            isDisabled={state === "disabled"}
          />
        );
    }
  },
};

export const IconButtonStory: StoryObj<typeof IconButton> = {
  args: {
    isDisabled: false,
    size: "medium",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <IconButton {...props}>
      <IconActivity />
    </IconButton>
  ),
};
