import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15661)"><path d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15661"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13171", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCircle size={size} /> });