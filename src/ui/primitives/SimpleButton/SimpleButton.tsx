import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import "./button.css"

export type SimpleButtonProps = PropsWithChildren<{
  size: 'small' | 'medium',
  text: string,
  onClick: () => void
}>

export const SimpleButton: FC<SimpleButtonProps> = ({size, onClick, text, ...props}) => {
  const classNames = clsx(
    "button",
    "button-variant-primary",
    `button-size-${size}`,
  );

  return <button className={classNames} onClick={onClick} {...props}>{text}</button>
}
