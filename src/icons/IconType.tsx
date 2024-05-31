import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconType = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.91663 2.66675C1.91663 2.25253 2.25241 1.91675 2.66663 1.91675H13.3333C13.7475 1.91675 14.0833 2.25253 14.0833 2.66675V4.66675C14.0833 5.08096 13.7475 5.41675 13.3333 5.41675C12.9191 5.41675 12.5833 5.08096 12.5833 4.66675V3.41675H8.74996V12.5834H9.99996C10.4142 12.5834 10.75 12.9192 10.75 13.3334C10.75 13.7476 10.4142 14.0834 9.99996 14.0834H5.99996C5.58575 14.0834 5.24996 13.7476 5.24996 13.3334C5.24996 12.9192 5.58575 12.5834 5.99996 12.5834H7.24996V3.41675H3.41663V4.66675C3.41663 5.08096 3.08084 5.41675 2.66663 5.41675C2.25241 5.41675 1.91663 5.08096 1.91663 4.66675V2.66675Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconType, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13649", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconType size={size} /> });