import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconPauseCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15907)"><path d="M6.66683 10V6.00004M9.3335 10V6.00004M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15907"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconPauseCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13574", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPauseCircle size={size} /> });