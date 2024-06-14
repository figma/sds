import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconChevronLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M9.43431 12.5657C9.74673 12.8781 10.2533 12.8781 10.5657 12.5657C10.8781 12.2533 10.8781 11.7467 10.5657 11.4343L9.43431 12.5657ZM6 8L5.43431 7.43431C5.1219 7.74673 5.1219 8.25327 5.43431 8.56569L6 8ZM10.5657 4.56569C10.8781 4.25327 10.8781 3.74673 10.5657 3.43431C10.2533 3.1219 9.74673 3.1219 9.43431 3.43431L10.5657 4.56569ZM10.5657 11.4343L6.56569 7.43431L5.43431 8.56569L9.43431 12.5657L10.5657 11.4343ZM6.56569 8.56569L10.5657 4.56569L9.43431 3.43431L5.43431 7.43431L6.56569 8.56569Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconChevronLeft,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13064",
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
    example: ({ size }) => <IconChevronLeft size={size} />,
  },
);
