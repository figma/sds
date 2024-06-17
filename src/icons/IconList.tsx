import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconList = (props: IconProps) => (
  <Icon {...props}><path d="M5.33333 4H14M5.33333 8H14M5.33333 12H14M2 4H2.00667M2 8H2.00667M2 12H2.00667" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconList, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13538", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconList size={size} /> });