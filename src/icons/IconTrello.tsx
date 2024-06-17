import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTrello = (props: IconProps) => (
  <Icon {...props}><path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.66667 4.66667H4.66667V10.6667H6.66667V4.66667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.3333 4.66667H9.33333V8H11.3333V4.66667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconTrello, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13641", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTrello size={size} /> });