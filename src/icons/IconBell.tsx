import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBell = (props: IconProps) => (
  <Icon {...props}><path d="M9.15333 13.9999C9.03613 14.202 8.86789 14.3697 8.66548 14.4863C8.46307 14.6029 8.23359 14.6642 8 14.6642C7.76641 14.6642 7.53693 14.6029 7.33452 14.4863C7.1321 14.3697 6.96387 14.202 6.84667 13.9999M12 5.33325C12 4.27239 11.5786 3.25497 10.8284 2.50482C10.0783 1.75468 9.06087 1.33325 8 1.33325C6.93913 1.33325 5.92172 1.75468 5.17157 2.50482C4.42143 3.25497 4 4.27239 4 5.33325C4 9.99992 2 11.3333 2 11.3333H14C14 11.3333 12 9.99992 12 5.33325Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconBell, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13048", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBell size={size} /> });