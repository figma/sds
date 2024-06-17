import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTv = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16055)"><path d="M11.3333 1.33325L8.00001 4.66659L4.66668 1.33325M2.66668 4.66659H13.3333C14.0697 4.66659 14.6667 5.26354 14.6667 5.99992V13.3333C14.6667 14.0696 14.0697 14.6666 13.3333 14.6666H2.66668C1.9303 14.6666 1.33334 14.0696 1.33334 13.3333V5.99992C1.33334 5.26354 1.9303 4.66659 2.66668 4.66659Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16055"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconTv, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13648", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTv size={size} /> });