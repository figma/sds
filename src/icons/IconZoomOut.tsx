import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconZoomOut = (props: IconProps) => (
  <Icon {...props}><path d="M14 14L11.1 11.1M5.33333 7.33333H9.33333M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconZoomOut, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13681", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconZoomOut size={size} /> });