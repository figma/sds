import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconVolume1 = (props: IconProps) => (
  <Icon {...props}><path d="M10.36 5.64016C10.9849 6.26526 11.336 7.11295 11.336 7.99683C11.336 8.88071 10.9849 9.7284 10.36 10.3535M7.33334 3.3335L4.00001 6.00016H1.33334V10.0002H4.00001L7.33334 12.6668V3.3335Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconVolume1, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13666", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconVolume1 size={size} /> });