import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconZapOff = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16117)"><path d="M8.27341 4.49984L8.66675 1.33317L7.04675 3.27984M12.3801 8.6065L14.0001 6.6665H10.4401M5.33341 5.33317L2.00008 9.33317H8.00008L7.33341 14.6665L10.6667 10.6665M0.666748 0.666504L15.3334 15.3332" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16117"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconZapOff, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13677", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconZapOff size={size} /> });