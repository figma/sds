import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBarChart2 = (props: IconProps) => (
  <Icon {...props}><path d="M12 13.3334V6.66675M8 13.3334V2.66675M4 13.3334V9.33342" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconBarChart2, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13045", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBarChart2 size={size} /> });