import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconDivide = (props: IconProps) => (
  <Icon {...props}><path d="M3.3335 8.00002H12.6668M9.3335 4.00002C9.3335 4.7364 8.73654 5.33335 8.00016 5.33335C7.26378 5.33335 6.66683 4.7364 6.66683 4.00002C6.66683 3.26364 7.26378 2.66669 8.00016 2.66669C8.73654 2.66669 9.3335 3.26364 9.3335 4.00002ZM9.3335 12C9.3335 12.7364 8.73654 13.3334 8.00016 13.3334C7.26378 13.3334 6.66683 12.7364 6.66683 12C6.66683 11.2636 7.26378 10.6667 8.00016 10.6667C8.73654 10.6667 9.3335 11.2636 9.3335 12Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconDivide, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13482", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconDivide size={size} /> });