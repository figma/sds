import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowLeft = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.53049 2.80292C8.82339 3.09582 8.82339 3.57069 8.53049 3.86358L5.14416 7.24992H12.6668C13.081 7.24992 13.4168 7.58571 13.4168 7.99992C13.4168 8.41413 13.081 8.74992 12.6668 8.74992H5.14416L8.53049 12.1363C8.82339 12.4291 8.82339 12.904 8.53049 13.1969C8.2376 13.4898 7.76273 13.4898 7.46983 13.1969L2.80317 8.53025C2.51027 8.23736 2.51027 7.76248 2.80317 7.46959L7.46983 2.80292C7.76273 2.51003 8.2376 2.51003 8.53049 2.80292Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13034", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowLeft size={size} /> });