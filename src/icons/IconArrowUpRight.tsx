import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconArrowUpRight = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M4.10106 10.7677C3.78864 11.0801 3.78864 11.5867 4.10106 11.8991C4.41348 12.2115 4.92001 12.2115 5.23243 11.8991L4.10106 10.7677ZM11.3334 4.66675H12.1334C12.1334 4.22492 11.7752 3.86675 11.3334 3.86675V4.66675ZM4.66675 3.86675C4.22492 3.86675 3.86675 4.22492 3.86675 4.66675C3.86675 5.10858 4.22492 5.46675 4.66675 5.46675V3.86675ZM10.5334 11.3334C10.5334 11.7752 10.8916 12.1334 11.3334 12.1334C11.7752 12.1334 12.1334 11.7752 12.1334 11.3334H10.5334ZM5.23243 11.8991L11.8991 5.23243L10.7677 4.10106L4.10106 10.7677L5.23243 11.8991ZM4.66675 5.46675H11.3334V3.86675H4.66675V5.46675ZM10.5334 4.66675V11.3334H12.1334V4.66675H10.5334Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconArrowUpRight,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13041",
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
    example: ({ size }) => <IconArrowUpRight size={size} />,
  },
);
