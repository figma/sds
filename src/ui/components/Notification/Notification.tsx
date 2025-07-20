import clsx from "clsx";
import { DestructiveIconButton, IconButton } from "components";
import { IconX } from "icons";
import { ComponentProps, ReactNode } from "react";
import css from "./Notification.module.css";

type NotificationVariant = "message" | "alert";

// TODO: notification still needs an onDismiss handler or something
export type NotificationProps = ComponentProps<"div"> & {
  isDismissible?: boolean;
  icon?: ReactNode;
  variant?: NotificationVariant;
  dismissLabel?: string;
};

export function Notification({
  children,
  isDismissible,
  icon,
  variant = "message",
  dismissLabel = "Dismiss notification",
  ...props
}: NotificationProps) {
  const classNames = clsx(css.root, css[variant]);
  return (
    <div className={classNames} {...props}>
      {icon && <span className={css.icon}>{icon}</span>}
      <div className={css.content}>{children}</div>
      {isDismissible &&
        (variant === "alert" ? (
          <DestructiveIconButton
            size="small"
            variant="dangerSubtle"
            aria-label={dismissLabel}
          >
            <IconX />
          </DestructiveIconButton>
        ) : (
          <IconButton
            size="small"
            variant="subtle"
            aria-label={dismissLabel}
          >
            <IconX />
          </IconButton>
        ))}
    </div>
  );
}
