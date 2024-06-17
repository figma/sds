import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconAirplay = (props: IconProps) => (
  <Icon {...props}><path d="M3.33331 11.3333H2.66665C2.31302 11.3333 1.97389 11.1929 1.72384 10.9428C1.47379 10.6928 1.33331 10.3536 1.33331 10V3.33333C1.33331 2.97971 1.47379 2.64057 1.72384 2.39052C1.97389 2.14048 2.31302 2 2.66665 2H13.3333C13.6869 2 14.0261 2.14048 14.2761 2.39052C14.5262 2.64057 14.6666 2.97971 14.6666 3.33333V10C14.6666 10.3536 14.5262 10.6928 14.2761 10.9428C14.0261 11.1929 13.6869 11.3333 13.3333 11.3333H12.6666M7.99998 10L11.3333 14H4.66665L7.99998 10Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconAirplay, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13019", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAirplay size={size} /> });