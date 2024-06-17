import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCode = (props: IconProps) => (
  <Icon {...props}><path d="M10.6666 12L14.6666 8L10.6666 4M5.33331 4L1.33331 8L5.33331 12" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCode, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13182", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCode size={size} /> });