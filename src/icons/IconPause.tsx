import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconPause = (props: IconProps) => (
  <Icon {...props}><path d="M6.66667 2.66663H4V13.3333H6.66667V2.66663Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2.66663H9.33333V13.3333H12V2.66663Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconPause, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13572", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPause size={size} /> });