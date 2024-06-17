import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconHash = (props: IconProps) => (
  <Icon {...props}><path d="M2.66669 6H13.3334M2.66669 10H13.3334M6.66669 2L5.33335 14M10.6667 2L9.33335 14" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconHash, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13521", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconHash size={size} /> });