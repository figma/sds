import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconGrid = (props: IconProps) => (
  <Icon {...props}><path d="M6.66667 2H2V6.66667H6.66667V2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2H9.33333V6.66667H14V2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 9.33333H9.33333V14H14V9.33333Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.66667 9.33333H2V14H6.66667V9.33333Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconGrid, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13518", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconGrid size={size} /> });