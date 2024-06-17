import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronsUp = (props: IconProps) => (
  <Icon {...props}><path d="M11.3332 7.33333L7.99984 4L4.6665 7.33333M11.3332 12L7.99984 8.66667L4.6665 12" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronsUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13169", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronsUp size={size} /> });