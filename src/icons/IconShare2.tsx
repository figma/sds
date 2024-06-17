import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconShare2 = (props: IconProps) => (
  <Icon {...props}><path d="M5.72667 9.00659L10.28 11.6599M10.2733 4.33992L5.72667 6.99325M14 3.33325C14 4.43782 13.1046 5.33325 12 5.33325C10.8954 5.33325 10 4.43782 10 3.33325C10 2.22868 10.8954 1.33325 12 1.33325C13.1046 1.33325 14 2.22868 14 3.33325ZM6 7.99992C6 9.10449 5.10457 9.99992 4 9.99992C2.89543 9.99992 2 9.10449 2 7.99992C2 6.89535 2.89543 5.99992 4 5.99992C5.10457 5.99992 6 6.89535 6 7.99992ZM14 12.6666C14 13.7712 13.1046 14.6666 12 14.6666C10.8954 14.6666 10 13.7712 10 12.6666C10 11.562 10.8954 10.6666 12 10.6666C13.1046 10.6666 14 11.562 14 12.6666Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconShare2, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13608", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconShare2 size={size} /> });