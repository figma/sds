import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowDownRight = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.13642 4.13642C4.42931 3.84352 4.90418 3.84352 5.19708 4.13642L10.5834 9.52275V4.66675C10.5834 4.25253 10.9192 3.91675 11.3334 3.91675C11.7476 3.91675 12.0834 4.25253 12.0834 4.66675V11.3334C12.0834 11.7476 11.7476 12.0834 11.3334 12.0834H4.66675C4.25253 12.0834 3.91675 11.7476 3.91675 11.3334C3.91675 10.9192 4.25253 10.5834 4.66675 10.5834H9.52275L4.13642 5.19708C3.84352 4.90418 3.84352 4.42931 4.13642 4.13642Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowDownRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13033", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowDownRight size={size} /> });