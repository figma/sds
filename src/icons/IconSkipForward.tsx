import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconSkipForward = (props: IconProps) => (
  <Icon {...props}><path d="M12.6666 3.33341V12.6667M3.33325 2.66675L9.99992 8.00008L3.33325 13.3334V2.66675Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconSkipForward, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13615", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSkipForward size={size} /> });