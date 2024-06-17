import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBookmark = (props: IconProps) => (
  <Icon {...props}><path d="M12.6667 14L8.00001 10.6667L3.33334 14V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H11.3333C11.687 2 12.0261 2.14048 12.2762 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconBookmark, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13055", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBookmark size={size} /> });