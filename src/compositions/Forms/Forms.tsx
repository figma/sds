import clsx from "clsx";
import { Form, type FormProps } from "ui";
import "./forms.css";

export type FormBoxProps = FormProps;
export function FormBox({ className, ...props }: FormBoxProps) {
  const classNames = clsx(className, "form-box");
  return <Form className={classNames} {...props} />;
}
