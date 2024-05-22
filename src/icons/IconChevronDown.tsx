import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconChevronDown = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.46967 5.46967C3.76256 5.17678 4.23744 5.17678 4.53033 5.46967L8 8.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L3.46967 6.53033C3.17678 6.23744 3.17678 5.76256 3.46967 5.46967Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconChevronDown, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13072", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronDown size={size} /> });