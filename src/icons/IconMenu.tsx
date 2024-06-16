import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconMenu = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M2 7.2C1.55817 7.2 1.2 7.55817 1.2 8C1.2 8.44183 1.55817 8.8 2 8.8V7.2ZM14 8.8C14.4418 8.8 14.8 8.44183 14.8 8C14.8 7.55817 14.4418 7.2 14 7.2V8.8ZM2 3.2C1.55817 3.2 1.2 3.55817 1.2 4C1.2 4.44183 1.55817 4.8 2 4.8V3.2ZM14 4.8C14.4418 4.8 14.8 4.44183 14.8 4C14.8 3.55817 14.4418 3.2 14 3.2V4.8ZM2 11.2C1.55817 11.2 1.2 11.5582 1.2 12C1.2 12.4418 1.55817 12.8 2 12.8V11.2ZM14 12.8C14.4418 12.8 14.8 12.4418 14.8 12C14.8 11.5582 14.4418 11.2 14 11.2V12.8ZM2 8.8H14V7.2H2V8.8ZM2 4.8H14V3.2H2V4.8ZM2 12.8H14V11.2H2V12.8Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconMenu,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13551",
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
    example: ({ size }) => <IconMenu size={size} />,
  },
);
