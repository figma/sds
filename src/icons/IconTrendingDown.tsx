import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTrendingDown = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16047)"><path d="M15.3334 12L9.00008 5.66667L5.66675 9L0.666748 4M15.3334 12H11.3334M15.3334 12L15.3334 8" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16047"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconTrendingDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13644", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTrendingDown size={size} /> });