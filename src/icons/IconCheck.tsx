import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCheck = (props: IconProps) => (
  <Icon {...props}><path d="M13.3333 4L5.99999 11.3333L2.66666 8" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCheck, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13063", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCheck size={size} /> });