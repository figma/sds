import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconChevronUp = (props: IconProps) => (
  <Icon {...props}><path d="M11.4343 10.5657C11.7467 10.8781 12.2533 10.8781 12.5657 10.5657C12.8781 10.2533 12.8781 9.74673 12.5657 9.43431L11.4343 10.5657ZM8 6L8.56569 5.43431C8.25327 5.1219 7.74673 5.1219 7.43431 5.43431L8 6ZM3.43431 9.43431C3.1219 9.74673 3.1219 10.2533 3.43431 10.5657C3.74673 10.8781 4.25327 10.8781 4.56569 10.5657L3.43431 9.43431ZM12.5657 9.43431L8.56569 5.43431L7.43431 6.56569L11.4343 10.5657L12.5657 9.43431ZM7.43431 5.43431L3.43431 9.43431L4.56569 10.5657L8.56569 6.56569L7.43431 5.43431Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconChevronUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13166", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronUp size={size} /> });