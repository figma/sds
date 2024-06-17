import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconAlertCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15555)"><path d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15555"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconAlertCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13020", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAlertCircle size={size} /> });