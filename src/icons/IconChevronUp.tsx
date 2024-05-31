import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconChevronUp = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.46967 5.46967C7.76256 5.17678 8.23744 5.17678 8.53033 5.46967L12.5303 9.46967C12.8232 9.76256 12.8232 10.2374 12.5303 10.5303C12.2374 10.8232 11.7626 10.8232 11.4697 10.5303L8 7.06066L4.53033 10.5303C4.23744 10.8232 3.76256 10.8232 3.46967 10.5303C3.17678 10.2374 3.17678 9.76256 3.46967 9.46967L7.46967 5.46967Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconChevronUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13166", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronUp size={size} /> });