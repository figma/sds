import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBookOpen = (props: IconProps) => (
  <Icon {...props}><path d="M8.00016 4.66667C8.00016 3.95942 7.71921 3.28115 7.21911 2.78105C6.71902 2.28095 6.04074 2 5.3335 2H1.3335V12H6.00016C6.5306 12 7.0393 12.2107 7.41438 12.5858C7.78945 12.9609 8.00016 13.4696 8.00016 14M8.00016 4.66667V14M8.00016 4.66667C8.00016 3.95942 8.28111 3.28115 8.78121 2.78105C9.28131 2.28095 9.95959 2 10.6668 2H14.6668V12H10.0002C9.46973 12 8.96102 12.2107 8.58595 12.5858C8.21088 12.9609 8.00016 13.4696 8.00016 14" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconBookOpen, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13053", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBookOpen size={size} /> });