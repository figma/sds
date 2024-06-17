import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconAlignLeft = (props: IconProps) => (
  <Icon {...props}><path d="M11.3333 6.66667H2M14 4H2M14 9.33333H2M11.3333 12H2" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconAlignLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13024", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAlignLeft size={size} /> });