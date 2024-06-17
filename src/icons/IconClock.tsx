import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconClock = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15665)"><path d="M8.00004 4.00004V8.00004L10.6667 9.33337M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15665"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconClock, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13173", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconClock size={size} /> });