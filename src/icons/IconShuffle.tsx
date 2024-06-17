import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconShuffle = (props: IconProps) => (
  <Icon {...props}><path d="M10.6666 2H14M14 2V5.33333M14 2L2.66663 13.3333M14 10.6667V14M14 14H10.6666M14 14L9.99996 10M2.66663 2.66667L5.99996 6" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconShuffle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13614", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconShuffle size={size} /> });