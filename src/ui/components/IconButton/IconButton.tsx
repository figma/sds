import {
  Button,
  ButtonDanger,
  ButtonDangerProps,
  type ButtonProps,
} from "components";

export type IconButtonProps = Omit<ButtonProps, "aria-label"> & {
  "aria-label": string;
};
export function IconButton({ ...props }: IconButtonProps) {
  return <Button {...props} />;
}

export type DestructiveIconButtonProps = Omit<
  ButtonDangerProps,
  "aria-label"
> & {
  "aria-label": string;
};
export function DestructiveIconButton(props: DestructiveIconButtonProps) {
  return <ButtonDanger {...props} />;
}
