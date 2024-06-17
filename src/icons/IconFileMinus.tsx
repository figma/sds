import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFileMinus = (props: IconProps) => (
  <Icon {...props}><path d="M9.33341 1.33333H4.00008C3.64646 1.33333 3.30732 1.4738 3.05727 1.72385C2.80722 1.9739 2.66675 2.31304 2.66675 2.66666V13.3333C2.66675 13.687 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V5.33333M9.33341 1.33333L13.3334 5.33333M9.33341 1.33333L9.33341 5.33333H13.3334M6.00008 9.99999H10.0001" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconFileMinus, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13499", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFileMinus size={size} /> });