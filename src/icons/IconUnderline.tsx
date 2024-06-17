import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconUnderline = (props: IconProps) => (
  <Icon {...props}><path d="M4.00008 2V6.66667C4.00008 7.72753 4.42151 8.74495 5.17165 9.49509C5.9218 10.2452 6.93922 10.6667 8.00008 10.6667C9.06095 10.6667 10.0784 10.2452 10.8285 9.49509C11.5787 8.74495 12.0001 7.72753 12.0001 6.66667V2M2.66675 14H13.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconUnderline, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13651", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconUnderline size={size} /> });