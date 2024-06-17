import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerRightUp = (props: IconProps) => (
  <Icon {...props}><path d="M6.66675 6.00002L10.0001 2.66669M10.0001 2.66669L13.3334 6.00002M10.0001 2.66669V10.6667C10.0001 11.3739 9.71913 12.0522 9.21903 12.5523C8.71893 13.0524 8.04066 13.3334 7.33341 13.3334H2.66675" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerRightUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13470", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerRightUp size={size} /> });