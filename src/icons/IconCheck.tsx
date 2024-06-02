import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconCheck = (props: IconProps) => (
  <Icon {...props}><path d="M13.899 4.56569C14.2114 4.25327 14.2114 3.74673 13.899 3.43431C13.5866 3.1219 13.0801 3.1219 12.7677 3.43431L13.899 4.56569ZM6 11.3333L5.43432 11.899C5.58435 12.049 5.78783 12.1333 6 12.1333C6.21218 12.1333 6.41566 12.049 6.56569 11.899L6 11.3333ZM3.23236 7.43431C2.91994 7.12189 2.41341 7.12189 2.10099 7.43431C1.78857 7.74673 1.78857 8.25327 2.10099 8.56569L3.23236 7.43431ZM12.7677 3.43431L5.43432 10.7676L6.56569 11.899L13.899 4.56569L12.7677 3.43431ZM6.56569 10.7676L3.23236 7.43431L2.10099 8.56569L5.43432 11.899L6.56569 10.7676Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconCheck, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13063", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCheck size={size} /> });