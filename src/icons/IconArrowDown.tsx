import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowDown = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.99992 2.58325C8.41413 2.58325 8.74992 2.91904 8.74992 3.33325V10.8559L12.1363 7.46959C12.4291 7.1767 12.904 7.1767 13.1969 7.46959C13.4898 7.76248 13.4898 8.23736 13.1969 8.53025L8.53025 13.1969C8.23736 13.4898 7.76248 13.4898 7.46959 13.1969L2.80292 8.53025C2.51003 8.23736 2.51003 7.76248 2.80292 7.46959C3.09582 7.1767 3.57069 7.1767 3.86358 7.46959L7.24992 10.8559V3.33325C7.24992 2.91904 7.58571 2.58325 7.99992 2.58325Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13032", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowDown size={size} /> });