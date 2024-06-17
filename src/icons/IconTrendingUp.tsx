import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTrendingUp = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16049)"><path d="M15.3334 4L9.00008 10.3333L5.66675 7L0.666748 12M15.3334 4H11.3334M15.3334 4L15.3334 8" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16049"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconTrendingUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13643", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTrendingUp size={size} /> });