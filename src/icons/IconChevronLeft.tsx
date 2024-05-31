import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconChevronLeft = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.5303 3.46967C10.8232 3.76256 10.8232 4.23744 10.5303 4.53033L7.06066 8L10.5303 11.4697C10.8232 11.7626 10.8232 12.2374 10.5303 12.5303C10.2374 12.8232 9.76256 12.8232 9.46967 12.5303L5.46967 8.53033C5.17678 8.23744 5.17678 7.76256 5.46967 7.46967L9.46967 3.46967C9.76256 3.17678 10.2374 3.17678 10.5303 3.46967Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconChevronLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13064", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronLeft size={size} /> });