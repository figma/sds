import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconSidebar = (props: IconProps) => (
  <Icon {...props}><path d="M6 2V14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconSidebar, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13613", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSidebar size={size} /> });