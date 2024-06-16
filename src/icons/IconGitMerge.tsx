import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconGitMerge = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M3.2 14C3.2 14.4418 3.55817 14.8 4 14.8C4.44183 14.8 4.8 14.4418 4.8 14H3.2ZM13.2 12C13.2 12.6627 12.6627 13.2 12 13.2V14.8C13.5464 14.8 14.8 13.5464 14.8 12H13.2ZM12 13.2C11.3373 13.2 10.8 12.6627 10.8 12H9.2C9.2 13.5464 10.4536 14.8 12 14.8V13.2ZM10.8 12C10.8 11.3373 11.3373 10.8 12 10.8V9.2C10.4536 9.2 9.2 10.4536 9.2 12H10.8ZM12 10.8C12.6627 10.8 13.2 11.3373 13.2 12H14.8C14.8 10.4536 13.5464 9.2 12 9.2V10.8ZM5.2 4C5.2 4.66274 4.66274 5.2 4 5.2V6.8C5.5464 6.8 6.8 5.5464 6.8 4H5.2ZM4 5.2C3.33726 5.2 2.8 4.66274 2.8 4H1.2C1.2 5.5464 2.4536 6.8 4 6.8V5.2ZM2.8 4C2.8 3.33726 3.33726 2.8 4 2.8V1.2C2.4536 1.2 1.2 2.4536 1.2 4H2.8ZM4 2.8C4.66274 2.8 5.2 3.33726 5.2 4H6.8C6.8 2.4536 5.5464 1.2 4 1.2V2.8ZM4.8 14V6H3.2L3.2 14H4.8ZM3.2 6C3.2 7.80347 3.91643 9.53308 5.19167 10.8083L6.32304 9.67696C5.34786 8.70177 4.8 7.37913 4.8 6H3.2ZM5.19167 10.8083C6.46692 12.0836 8.19653 12.8 10 12.8V11.2C8.62087 11.2 7.29823 10.6521 6.32304 9.67696L5.19167 10.8083Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconGitMerge,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13515",
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
    example: ({ size }) => <IconGitMerge size={size} />,
  },
);
