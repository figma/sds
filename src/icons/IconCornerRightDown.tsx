import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerRightDown = (props: IconProps) => (
  <Icon {...props}><path d="M6.66675 10L10.0001 13.3334M10.0001 13.3334L13.3334 10M10.0001 13.3334V5.33335C10.0001 4.62611 9.71913 3.94783 9.21903 3.44774C8.71893 2.94764 8.04066 2.66669 7.33341 2.66669H2.66675" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerRightDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13471", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerRightDown size={size} /> });