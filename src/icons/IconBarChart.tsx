import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBarChart = (props: IconProps) => (
  <Icon {...props}><path d="M8 13.3334V6.66675M12 13.3334V2.66675M4 13.3334V10.6667" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconBarChart, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13044", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBarChart size={size} /> });