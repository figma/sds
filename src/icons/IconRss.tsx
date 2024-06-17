import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconRss = (props: IconProps) => (
  <Icon {...props}><path d="M2.6665 7.33341C4.2578 7.33341 5.78393 7.96556 6.90914 9.09077C8.03436 10.216 8.6665 11.7421 8.6665 13.3334M2.6665 2.66675C5.49548 2.66675 8.20859 3.79055 10.209 5.79094C12.2094 7.79133 13.3332 10.5044 13.3332 13.3334M3.99984 12.6667C3.99984 13.0349 3.70136 13.3334 3.33317 13.3334C2.96498 13.3334 2.6665 13.0349 2.6665 12.6667C2.6665 12.2986 2.96498 12.0001 3.33317 12.0001C3.70136 12.0001 3.99984 12.2986 3.99984 12.6667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconRss, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13599", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconRss size={size} /> });