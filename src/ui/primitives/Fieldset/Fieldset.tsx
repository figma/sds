import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import {
  FieldError as RACFieldError,
  Form as RACForm,
  Keyboard as RACKeyboard,
  Label as RACLabel,
  Text as RACText,
  type FieldErrorProps as RACFieldErrorProps,
  type FormProps as RACFormProps,
  type LabelProps as RACLabelProps,
  type TextProps as RACTextProps,
  type ValidationResult as RACValidationResult,
} from "react-aria-components";
import "./fieldset.css";

export type FieldsetProps = ComponentPropsWithoutRef<"fieldset">;
export function Fieldset({ ...props }: FieldsetProps) {
  const classNames = clsx("fieldset");
  return <fieldset {...props} className={classNames} />;
}

export type LegendProps = ComponentPropsWithoutRef<"legend">;
export function Legend({ ...props }: LegendProps) {
  const classNames = clsx("legend");
  return <legend {...props} className={classNames} />;
}

export type FieldGroupProps = ComponentPropsWithoutRef<"div">;
export function FieldGroup({ ...props }: FieldGroupProps) {
  const classNames = clsx("field-group");
  return <div {...props} className={classNames} />;
}

export type FormProps = RACFormProps & { singleLine?: boolean };
export function Form({ className, singleLine, ...props }: FormProps) {
  const classNames = clsx(className, "form", singleLine && "form-single-line");
  return <RACForm className={classNames} {...props} />;
}

export type FormDataValue = FormDataEntryValue | FormDataEntryValue[];
export function formEventTargetToFormData(target: HTMLFormElement) {
  const dataIsArray = (data: FormDataValue): data is FormDataEntryValue[] =>
    Array.isArray(data);

  const formData = new FormData(target);
  const data: {
    [k: string]: FormDataValue;
  } = {};

  formData.forEach((value, key) => {
    if (!Reflect.has(data, key)) {
      data[key] = value;
      return;
    }
    // convert to array from single value
    const currentItem = data[key];
    if (dataIsArray(currentItem)) {
      currentItem.push(value);
    } else {
      data[key] = [currentItem, value];
    }
  });
  return data;
}

/**
 * Used by TextField, SelectField, TextareaField, SliderField, etc.
 */
export type SharedFieldProps = {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: RACValidationResult) => string);
};

export type FieldProps = ComponentPropsWithoutRef<"div">;
export function Field({ className, ...props }: FieldProps) {
  const classNames = clsx(className, "field");
  return <div className={classNames} {...props} />;
}
export type LabelProps = RACLabelProps;
export function Label({ className, ...props }: LabelProps) {
  const classNames = clsx(className, "label");
  return <RACLabel className={classNames} slot="label" {...props} />;
}
export type DescriptionProps = RACTextProps;
export function Description({ className, ...props }: DescriptionProps) {
  const classNames = clsx(className, "description");
  return <RACText className={classNames} slot="description" {...props} />;
}
export type FieldErrorProps = RACFieldErrorProps;
export function FieldError({ className, ...props }: FieldErrorProps) {
  const classNames = clsx(className, "error-message");
  return <RACFieldError {...props} className={classNames} />;
}
export type KeyboardProps = RACTextProps;
export function Keyboard({ className, children, ...props }: KeyboardProps) {
  const classNames = clsx(className, "keyboard");
  const items =
    typeof children === "string"
      ? children.split("").map((k) => <kbd key={k}>{k}</kbd>)
      : children;
  return (
    <RACKeyboard {...props} className={classNames}>
      {items}
    </RACKeyboard>
  );
}
