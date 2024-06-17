import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconSend = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15969)"><path d="M14.6667 1.33325L7.33337 8.66658M14.6667 1.33325L10 14.6666L7.33337 8.66658M14.6667 1.33325L1.33337 5.99992L7.33337 8.66658" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15969"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconSend, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13603", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSend size={size} /> });