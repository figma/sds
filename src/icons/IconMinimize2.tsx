import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMinimize2 = (props: IconProps) => (
  <Icon {...props}><path d="M2.66667 9.33333H6.66667M6.66667 9.33333V13.3333M6.66667 9.33333L2 14M13.3333 6.66667H9.33333M9.33333 6.66667V2.66667M9.33333 6.66667L14 2" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMinimize2, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13554", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinimize2 size={size} /> });