import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronUp = (props: IconProps) => (
  <Icon {...props}><path d="M12 10L8 6L4 10" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13166", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronUp size={size} /> });