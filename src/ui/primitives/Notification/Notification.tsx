import clsx from "clsx";
import { IconAlertTriangle, IconInfo, IconX } from "icons";
import {
  DestructiveIconButton,
  IconButton,
} from "ui/primitives/IconButton/IconButton";
import {
  Text,
  TextProps,
  TextStrong,
  TextStrongProps,
} from "ui/primitives/Text/Text";
import "./notification.css";

type NotificationScheme = "default" | "danger";

const iconFromScheme = (scheme: NotificationScheme): React.ReactNode => {
  switch (scheme) {
    case "default":
      return <IconInfo size="20" />;
    case "danger":
      return <IconAlertTriangle size="20" />;
  }
};

// TODO: notification still needs an onDismiss handler or something
export type NotificationProps = React.ComponentPropsWithoutRef<"div"> & {
  isDismissible?: boolean;
  hasIcon?: boolean;
  scheme?: NotificationScheme;
};
export function Notification({
  children,
  className,
  isDismissible,
  hasIcon = true,
  scheme = "default",
  ...props
}: NotificationProps) {
  const classNames = clsx(
    className,
    "notification",
    `notification-scheme-${scheme}`,
  );
  return (
    <div className={classNames} {...props}>
      {hasIcon && (
        <span className="notification-icon">{iconFromScheme(scheme)}</span>
      )}
      <div className="notification-content">{children}</div>
      {isDismissible &&
        (scheme === "danger" ? (
          <DestructiveIconButton
            size="sm"
            variant="subtle"
            aria-label="Dismiss notification"
          >
            <IconX />
          </DestructiveIconButton>
        ) : (
          <IconButton
            size="sm"
            variant="subtle"
            aria-label="Dismiss notification"
          >
            <IconX />
          </IconButton>
        ))}
    </div>
  );
}

export type NotificationTitleProps = TextStrongProps;
export function NotificationTitle({
  className,
  ...props
}: NotificationTitleProps) {
  const classNames = clsx(className, "notification-title");
  return <TextStrong className={classNames} {...props} />;
}
export type NotificationBodyProps = TextProps;
export function NotificationBody({
  className,
  ...props
}: NotificationBodyProps) {
  const classNames = clsx(className, "notification-body");
  return <Text className={classNames} {...props} />;
}
export type NotificationActionsProps = React.ComponentPropsWithoutRef<"div">;
export function NotificationActions({
  className,
  ...props
}: NotificationActionsProps) {
  const classNames = clsx(className, "notification-actions");
  return <div className={classNames} {...props} />;
}
