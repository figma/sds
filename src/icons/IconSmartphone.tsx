import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconSmartphone = (props: IconProps) => (
  <Icon {...props}><path d="M8.00001 11.9999H8.00668M4.66668 1.33325H11.3333C12.0697 1.33325 12.6667 1.93021 12.6667 2.66659V13.3333C12.6667 14.0696 12.0697 14.6666 11.3333 14.6666H4.66668C3.9303 14.6666 3.33334 14.0696 3.33334 13.3333V2.66659C3.33334 1.93021 3.9303 1.33325 4.66668 1.33325Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconSmartphone, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13619", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSmartphone size={size} /> });