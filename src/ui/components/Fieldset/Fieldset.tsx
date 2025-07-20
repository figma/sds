import clsx from "clsx";
import { ComponentProps } from "react";
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
import css from "./Fieldset.module.css";

export type FieldsetProps = ComponentProps<"fieldset">;
export function Fieldset({ ...props }: FieldsetProps) {
  return <fieldset className={css.fieldset} {...props} />;
}

export type LegendProps = ComponentProps<"legend">;
export function Legend({ ...props }: LegendProps) {
  return <legend className={css.legend} {...props} />;
}

export type FieldGroupProps = ComponentProps<"div">;
export function FieldGroup({ ...props }: FieldGroupProps) {
  return <div className={css.group} {...props} />;
}

export type FormProps = RACFormProps & { singleLine?: boolean };
export function Form({ singleLine, ...props }: FormProps) {
  const classNames = clsx(css.form, singleLine && css.singleLine);
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

export type FieldProps = ComponentProps<"div">;
export function Field({ ...props }: FieldProps) {
  return <div className={css.field} {...props} />;
}
export type LabelProps = RACLabelProps;
export function Label({ ...props }: LabelProps) {
  return <RACLabel className={css.label} slot="label" {...props} />;
}
export type DescriptionProps = RACTextProps;
export function Description({ ...props }: DescriptionProps) {
  return <RACText className={css.description} slot="description" {...props} />;
}
export type FieldErrorProps = RACFieldErrorProps;
export function FieldError({ ...props }: FieldErrorProps) {
  return <RACFieldError {...props} className={css.errorMessage} />;
}
export type KeyboardProps = RACTextProps;
export function Keyboard({ children, ...props }: KeyboardProps) {
  const items =
    typeof children === "string"
      ? children.split("").map((k) => <kbd key={k}>{k}</kbd>)
      : children;
  return (
    <RACKeyboard {...props} className={css.keyboard}>
      {items}
    </RACKeyboard>
  );
}
