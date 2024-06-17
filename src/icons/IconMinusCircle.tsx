import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMinusCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15877)"><path d="M5.33331 8.00004H10.6666M14.6666 8.00004C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6819 1.33337 14.6666 4.31814 14.6666 8.00004Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15877"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconMinusCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13556", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinusCircle size={size} /> });