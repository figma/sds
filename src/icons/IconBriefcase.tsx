import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBriefcase = (props: IconProps) => (
  <Icon {...props}><path d="M10.6667 14V3.33333C10.6667 2.97971 10.5262 2.64057 10.2762 2.39052C10.0261 2.14048 9.687 2 9.33337 2H6.66671C6.31309 2 5.97395 2.14048 5.7239 2.39052C5.47385 2.64057 5.33337 2.97971 5.33337 3.33333V14M2.66671 4.66667H13.3334C14.0698 4.66667 14.6667 5.26362 14.6667 6V12.6667C14.6667 13.403 14.0698 14 13.3334 14H2.66671C1.93033 14 1.33337 13.403 1.33337 12.6667V6C1.33337 5.26362 1.93033 4.66667 2.66671 4.66667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconBriefcase, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13057", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBriefcase size={size} /> });