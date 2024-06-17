import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconVolume = (props: IconProps) => (
  <Icon {...props}><path d="M7.33337 3.3335L4.00004 6.00016H1.33337V10.0002H4.00004L7.33337 12.6668V3.3335Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconVolume, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13667", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconVolume size={size} /> });