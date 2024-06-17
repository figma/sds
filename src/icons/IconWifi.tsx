import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconWifi = (props: IconProps) => (
  <Icon {...props}><path d="M3.33344 8.36653C4.65115 7.26897 6.31185 6.66794 8.02678 6.66794C9.74171 6.66794 11.4024 7.26897 12.7201 8.36653M0.946777 5.99986C2.89506 4.2825 5.40297 3.33496 8.00011 3.33496C10.5972 3.33496 13.1052 4.2825 15.0534 5.99986M5.68678 10.7399C6.36358 10.259 7.17323 10.0007 8.00344 10.0007C8.83366 10.0007 9.64331 10.259 10.3201 10.7399M8.00011 13.3332H8.00678" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconWifi, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13672", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconWifi size={size} /> });