import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFilePlus = (props: IconProps) => (
  <Icon {...props}><path d="M9.33317 1.33333H3.99984C3.64622 1.33333 3.30708 1.4738 3.05703 1.72385C2.80698 1.9739 2.6665 2.31304 2.6665 2.66666V13.3333C2.6665 13.687 2.80698 14.0261 3.05703 14.2761C3.30708 14.5262 3.64622 14.6667 3.99984 14.6667H11.9998C12.3535 14.6667 12.6926 14.5262 12.9426 14.2761C13.1927 14.0261 13.3332 13.687 13.3332 13.3333V5.33333M9.33317 1.33333L13.3332 5.33333M9.33317 1.33333L9.33317 5.33333H13.3332M7.99984 12V7.99999M5.99984 9.99999H9.99984" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconFilePlus, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13501", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFilePlus size={size} /> });