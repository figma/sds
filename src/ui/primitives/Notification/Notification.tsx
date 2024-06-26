import clsx from "clsx";
import { IconX } from "icons";
import { DestructiveIconButton, IconButton } from "primitives";
import { ReactNode } from "react";
import "./notification.css";

type NotificationVariant = "message" | "alert";

// TODO: notification still needs an onDismiss handler or something
export type NotificationProps = React.ComponentPropsWithoutRef<"div"> & {
  isDismissible?: boolean;
  icon?: ReactNode;
  variant?: NotificationVariant;
};
export function Notification({
  children,
  className,
  isDismissible,
  icon,
  variant = "message",
  ...props
}: NotificationProps) {
  const classNames = clsx(
    className,
    "notification",
    `notification-variant-${variant}`,
  );
  return (
    <div className={classNames} {...props}>
      {icon && <span className="notification-icon">{icon}</span>}
      <div className="notification-content">{children}</div>
      {isDismissible &&
        (variant === "alert" ? (
          <DestructiveIconButton
            size="small"
            variant="danger-subtle"
            aria-label="Dismiss notification"
          >
            <IconX />
          </DestructiveIconButton>
        ) : (
          <IconButton
            size="small"
            variant="subtle"
            aria-label="Dismiss notification"
          >
            <IconX />
          </IconButton>
        ))}
    </div>
  );
}
