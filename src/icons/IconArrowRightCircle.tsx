import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowRightCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15587)"><path d="M8.00001 10.6666L10.6667 7.99992M10.6667 7.99992L8.00001 5.33325M10.6667 7.99992H5.33334M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.31811 1.33325 8.00001 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15587"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconArrowRightCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13037", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowRightCircle size={size} /> });