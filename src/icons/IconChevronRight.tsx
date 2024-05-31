import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconChevronRight = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.46967 3.46967C5.76256 3.17678 6.23744 3.17678 6.53033 3.46967L10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L8.93934 8L5.46967 4.53033C5.17678 4.23744 5.17678 3.76256 5.46967 3.46967Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconChevronRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13165", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronRight size={size} /> });