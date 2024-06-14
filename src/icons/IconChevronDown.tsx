import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconChevronDown = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M4.56569 5.43431C4.25327 5.1219 3.74673 5.1219 3.43431 5.43431C3.1219 5.74673 3.1219 6.25327 3.43431 6.56569L4.56569 5.43431ZM8 10L7.43431 10.5657C7.74673 10.8781 8.25327 10.8781 8.56569 10.5657L8 10ZM12.5657 6.56569C12.8781 6.25327 12.8781 5.74673 12.5657 5.43431C12.2533 5.1219 11.7467 5.1219 11.4343 5.43431L12.5657 6.56569ZM3.43431 6.56569L7.43431 10.5657L8.56569 9.43431L4.56569 5.43431L3.43431 6.56569ZM8.56569 10.5657L12.5657 6.56569L11.4343 5.43431L7.43431 9.43431L8.56569 10.5657Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconChevronDown,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13072",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronDown size={size} />,
  },
);
