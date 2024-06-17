import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconAlignRight = (props: IconProps) => (
  <Icon {...props}><path d="M14 6.66667H4.66667M14 4H2M14 9.33333H2M14 12H4.66667" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconAlignRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13026", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAlignRight size={size} /> });