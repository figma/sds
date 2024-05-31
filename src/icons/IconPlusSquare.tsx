import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPlusSquare = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.33333 2.75C3.01117 2.75 2.75 3.01117 2.75 3.33333V12.6667C2.75 12.9888 3.01117 13.25 3.33333 13.25H12.6667C12.9888 13.25 13.25 12.9888 13.25 12.6667V3.33333C13.25 3.01117 12.9888 2.75 12.6667 2.75H3.33333ZM1.25 3.33333C1.25 2.18274 2.18274 1.25 3.33333 1.25H12.6667C13.8173 1.25 14.75 2.18274 14.75 3.33333V12.6667C14.75 13.8173 13.8173 14.75 12.6667 14.75H3.33333C2.18274 14.75 1.25 13.8173 1.25 12.6667V3.33333ZM8 4.58333C8.41421 4.58333 8.75 4.91912 8.75 5.33333V7.25H10.6667C11.0809 7.25 11.4167 7.58579 11.4167 8C11.4167 8.41421 11.0809 8.75 10.6667 8.75H8.75V10.6667C8.75 11.0809 8.41421 11.4167 8 11.4167C7.58579 11.4167 7.25 11.0809 7.25 10.6667V8.75H5.33333C4.91912 8.75 4.58333 8.41421 4.58333 8C4.58333 7.58579 4.91912 7.25 5.33333 7.25H7.25V5.33333C7.25 4.91912 7.58579 4.58333 8 4.58333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconPlusSquare, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13587", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPlusSquare size={size} /> });