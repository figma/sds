import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconShoppingBag = (props: IconProps) => (
  <Icon {...props}><path d="M2 3.99992L4 1.33325H12L14 3.99992M2 3.99992V13.3333C2 13.6869 2.14048 14.026 2.39052 14.2761C2.64057 14.5261 2.97971 14.6666 3.33333 14.6666H12.6667C13.0203 14.6666 13.3594 14.5261 13.6095 14.2761C13.8595 14.026 14 13.6869 14 13.3333V3.99992M2 3.99992H14M10.6667 6.66658C10.6667 7.37383 10.3857 8.05211 9.88562 8.5522C9.38552 9.0523 8.70724 9.33325 8 9.33325C7.29276 9.33325 6.61448 9.0523 6.11438 8.5522C5.61428 8.05211 5.33333 7.37383 5.33333 6.66658" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconShoppingBag, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13612", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconShoppingBag size={size} /> });