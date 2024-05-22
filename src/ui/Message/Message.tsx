import clsx from "clsx";
import { IconAlertTriangle, IconInfo, IconX } from "icons";
import { DestructiveIconButton, IconButton } from "ui/IconButton/IconButton";
import { Text, TextProps, TextStrong, TextStrongProps } from "ui/Text/Text";
import "./message.css";

type MessageScheme = "default" | "danger";

const iconFromScheme = (scheme: MessageScheme): React.ReactNode => {
  switch (scheme) {
    case "default":
      return <IconInfo size="20" />;
    case "danger":
      return <IconAlertTriangle size="20" />;
  }
};

// TODO: message still needs an onDismiss handler or something
export type MessageProps = React.ComponentPropsWithoutRef<"div"> & {
  isDismissible?: boolean;
  hasIcon?: boolean;
  scheme?: MessageScheme;
};
export function Message({
  children,
  className,
  isDismissible,
  hasIcon = true,
  scheme = "default",
  ...props
}: MessageProps) {
  const classNames = clsx(className, "message", `message-scheme-${scheme}`);
  return (
    <div className={classNames} {...props}>
      {hasIcon && (
        <span className="message-icon">{iconFromScheme(scheme)}</span>
      )}
      <div className="message-content">{children}</div>
      {isDismissible &&
        (scheme === "danger" ? (
          <DestructiveIconButton size="sm" aria-label="Dismiss message">
            <IconX />
          </DestructiveIconButton>
        ) : (
          <IconButton size="sm" aria-label="Dismiss message">
            <IconX />
          </IconButton>
        ))}
    </div>
  );
}

export type MessageTitleProps = TextStrongProps;
export function MessageTitle({ className, ...props }: MessageTitleProps) {
  const classNames = clsx(className, "message-title");
  return (
    <Text className={classNames}>
      <TextStrong {...props} />
    </Text>
  );
}
export type MessageBodyProps = TextProps;
export function MessageBody({ className, ...props }: MessageBodyProps) {
  const classNames = clsx(className, "message-body");
  return <Text className={classNames} {...props} />;
}
export type MessageActionsProps = React.ComponentPropsWithoutRef<"div">;
export function MessageActions({ className, ...props }: MessageActionsProps) {
  const classNames = clsx(className, "message-actions");
  return <div className={classNames} {...props} />;
}
