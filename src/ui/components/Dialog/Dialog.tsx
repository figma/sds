import clsx from "clsx";
import {
  Button,
  ButtonProps,
  Heading,
  HeadingProps,
  IconButton,
  IconButtonProps,
} from "components";
import { IconX } from "icons";
import React, { ComponentProps } from "react";
import {
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  Modal as RACModal,
  ModalOverlay as RACModalOverlay,
  Text as RACText,
  type DialogProps as RACDialogProps,
  type DialogTriggerProps as RACDialogTriggerProps,
  type ModalOverlayProps as RACModalOverlayProps,
  type TextProps,
} from "react-aria-components";
import css from "./Dialog.module.css";

export type DialogProps = RACDialogProps & {
  type?: "sheet" | "card";
};
export function Dialog({ type = "card", ...props }: DialogProps) {
  const classNames = clsx(css.dialog, css[type]);
  return <RACDialog className={classNames} {...props} />;
}

export type DialogCloseProps = Pick<IconButtonProps, "onPress"> & {
  label?: string;
};
export function DialogClose({
  onPress,
  label = "Dismiss dialog",
}: DialogCloseProps) {
  return (
    <IconButton
      aria-label={label}
      onPress={onPress}
      variant="subtle"
      size="small"
    >
      <IconX />
    </IconButton>
  );
}

export type DialogTriggerProps = RACDialogTriggerProps;
export function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <RACDialogTrigger {...props} />;
}

export interface DialogButtonProps
  extends DialogProps,
    Omit<DialogTriggerProps, "children"> {
  label: string;
  variant?: ButtonProps["variant"];
  icon?: React.ReactNode;
}
export function DialogButton({
  label,
  icon,
  variant,
  children,
  ...props
}: DialogButtonProps) {
  return (
    <DialogTrigger>
      {icon ? (
        <IconButton variant={variant} aria-label={label}>
          {icon}
        </IconButton>
      ) : (
        <Button variant={variant}>{label}</Button>
      )}
      <DialogModal isDismissable>
        <Dialog {...props}>{children}</Dialog>
      </DialogModal>
    </DialogTrigger>
  );
}

export type DialogTitleProps = HeadingProps;
export function DialogTitle({ ...props }: DialogTitleProps) {
  return <Heading {...props} slot="title" className={css.title} />;
}

export type DialogDescriptionProps = TextProps;
export function DialogDescription({ ...props }: DialogDescriptionProps) {
  return <RACText {...props} className={css.description} />;
}

export type DialogBodyProps = {
  bleed?: boolean;
} & ComponentProps<"div">;
export function DialogBody({ bleed, ...props }: DialogBodyProps) {
  const classNames = clsx(css.body, bleed && css.bodyBleed);
  return <div {...props} className={classNames} />;
}

export type DialogModalProps = RACModalOverlayProps;
export function DialogModal({
  children,
  isDismissable,
  ...props
}: DialogModalProps) {
  return (
    <RACModalOverlay className={css.backdrop} {...props}>
      <RACModal className={css.container}>{children}</RACModal>
    </RACModalOverlay>
  );
}
