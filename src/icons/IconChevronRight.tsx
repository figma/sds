import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconChevronRight = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M5.43431 11.4343C5.1219 11.7467 5.1219 12.2533 5.43431 12.5657C5.74673 12.8781 6.25327 12.8781 6.56569 12.5657L5.43431 11.4343ZM10 8L10.5657 8.56569C10.8781 8.25327 10.8781 7.74673 10.5657 7.43431L10 8ZM6.56569 3.43431C6.25327 3.1219 5.74673 3.1219 5.43431 3.43431C5.1219 3.74673 5.1219 4.25327 5.43431 4.56569L6.56569 3.43431ZM6.56569 12.5657L10.5657 8.56569L9.43431 7.43431L5.43431 11.4343L6.56569 12.5657ZM10.5657 7.43431L6.56569 3.43431L5.43431 4.56569L9.43431 8.56569L10.5657 7.43431Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconChevronRight,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13165",
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
    example: ({ size }) => <IconChevronRight size={size} />,
  },
);
