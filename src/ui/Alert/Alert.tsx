import clsx from "clsx";
import { IconAlertTriangle, IconInfo, IconX } from "icons";
import { DestructiveIconButton, IconButton } from "ui/IconButton/IconButton";
import { Text, TextProps, TextStrong, TextStrongProps } from "ui/Text/Text";
import "./alert.css";

type AlertScheme = "default" | "danger";

const iconFromScheme = (scheme: AlertScheme): React.ReactNode => {
  switch (scheme) {
    case "default":
      return <IconInfo size="20" />;
    case "danger":
      return <IconAlertTriangle size="20" />;
  }
};

// TODO: alert still needs an onDismiss handler or something
export type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  isDismissible?: boolean;
  hasIcon?: boolean;
  scheme?: AlertScheme;
};
export function Alert({
  children,
  className,
  isDismissible,
  hasIcon = true,
  scheme = "default",
  ...props
}: AlertProps) {
  const classNames = clsx(className, "alert", `alert-scheme-${scheme}`);
  return (
    <div className={classNames} {...props}>
      {hasIcon && <span className="alert-icon">{iconFromScheme(scheme)}</span>}
      <div className="alert-content">{children}</div>
      {isDismissible &&
        (scheme === "danger" ? (
          <DestructiveIconButton size="sm" aria-label="Dismiss alert">
            <IconX />
          </DestructiveIconButton>
        ) : (
          <IconButton size="sm" aria-label="Dismiss alert">
            <IconX />
          </IconButton>
        ))}
    </div>
  );
}

export type AlertTitleProps = TextStrongProps;
export function AlertTitle({ className, ...props }: AlertTitleProps) {
  const classNames = clsx(className, "alert-title");
  return (
    <Text className={classNames}>
      <TextStrong {...props} />
    </Text>
  );
}
export type AlertBodyProps = TextProps;
export function AlertBody({ className, ...props }: AlertBodyProps) {
  const classNames = clsx(className, "alert-body");
  return <Text className={classNames} {...props} />;
}
export type AlertActionsProps = React.ComponentPropsWithoutRef<"div">;
export function AlertActions({ className, ...props }: AlertActionsProps) {
  const classNames = clsx(className, "alert-actions");
  return <div className={classNames} {...props} />;
}
