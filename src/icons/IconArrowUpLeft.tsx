import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowUpLeft = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.91663 4.66675C3.91663 4.25253 4.25241 3.91675 4.66663 3.91675H11.3333C11.7475 3.91675 12.0833 4.25253 12.0833 4.66675C12.0833 5.08096 11.7475 5.41675 11.3333 5.41675H6.47729L11.8636 10.8031C12.1565 11.096 12.1565 11.5709 11.8636 11.8637C11.5707 12.1566 11.0959 12.1566 10.803 11.8637L5.41663 6.47741V11.3334C5.41663 11.7476 5.08084 12.0834 4.66663 12.0834C4.25241 12.0834 3.91663 11.7476 3.91663 11.3334V4.66675Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowUpLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13039", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUpLeft size={size} /> });