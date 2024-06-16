import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconTerminal = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M2.10106 10.7676C1.78864 11.08 1.78864 11.5865 2.10106 11.8989C2.41348 12.2114 2.92001 12.2114 3.23243 11.8989L2.10106 10.7676ZM6.66675 7.33325L7.23243 7.89894C7.54485 7.58652 7.54485 7.07999 7.23243 6.76757L6.66675 7.33325ZM3.23243 2.76757C2.92001 2.45515 2.41348 2.45515 2.10106 2.76757C1.78864 3.07999 1.78864 3.58652 2.10106 3.89894L3.23243 2.76757ZM8.00008 11.8666C7.55825 11.8666 7.20008 12.2248 7.20008 12.6666C7.20008 13.1084 7.55825 13.4666 8.00008 13.4666V11.8666ZM13.3334 13.4666C13.7752 13.4666 14.1334 13.1084 14.1334 12.6666C14.1334 12.2248 13.7752 11.8666 13.3334 11.8666V13.4666ZM3.23243 11.8989L7.23243 7.89894L6.10106 6.76757L2.10106 10.7676L3.23243 11.8989ZM7.23243 6.76757L3.23243 2.76757L2.10106 3.89894L6.10106 7.89894L7.23243 6.76757ZM8.00008 13.4666H13.3334V11.8666H8.00008V13.4666Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconTerminal,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13634",
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
    example: ({ size }) => <IconTerminal size={size} />,
  },
);
