import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconBarChart2 = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8 1.91675C8.41421 1.91675 8.75 2.25253 8.75 2.66675V13.3334C8.75 13.7476 8.41421 14.0834 8 14.0834C7.58579 14.0834 7.25 13.7476 7.25 13.3334V2.66675C7.25 2.25253 7.58579 1.91675 8 1.91675ZM12 5.91675C12.4142 5.91675 12.75 6.25253 12.75 6.66675V13.3334C12.75 13.7476 12.4142 14.0834 12 14.0834C11.5858 14.0834 11.25 13.7476 11.25 13.3334V6.66675C11.25 6.25253 11.5858 5.91675 12 5.91675ZM4 8.58341C4.41421 8.58341 4.75 8.9192 4.75 9.33341V13.3334C4.75 13.7476 4.41421 14.0834 4 14.0834C3.58579 14.0834 3.25 13.7476 3.25 13.3334V9.33341C3.25 8.9192 3.58579 8.58341 4 8.58341Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconBarChart2, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13045", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBarChart2 size={size} /> });