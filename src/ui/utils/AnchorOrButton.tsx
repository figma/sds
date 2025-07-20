import React, { ForwardedRef, forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

export type AnchorOrButtonSharedProps = {
  children?: React.ReactNode;
  href?: string;
};

export type AnchorOrButtonProps = AnchorOrButtonSharedProps & {
  [key: string]: any;
};

function isAnchorProps(
  props: AnchorOrButtonProps,
): props is AnchorOrButtonSharedProps & {
  href: string;
  [key: string]: any;
} {
  return "href" in props;
}

export const AnchorOrButton = forwardRef(function AnchorOrButton(
  props: AnchorOrButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const { style, ...sharedProps } = props;
  return isAnchorProps(props) ? (
    <RACLink
      {...sharedProps}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {props.children}
    </RACLink>
  ) : (
    <RACButton
      {...sharedProps}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {props.children}
    </RACButton>
  );
});
