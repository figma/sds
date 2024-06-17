import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTablet = (props: IconProps) => (
  <Icon {...props}><path d="M8.00002 11.9999H8.00669M4.00002 1.33325H12C12.7364 1.33325 13.3334 1.93021 13.3334 2.66659V13.3333C13.3334 14.0696 12.7364 14.6666 12 14.6666H4.00002C3.26364 14.6666 2.66669 14.0696 2.66669 13.3333V2.66659C2.66669 1.93021 3.26364 1.33325 4.00002 1.33325Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconTablet, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13629", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTablet size={size} /> });