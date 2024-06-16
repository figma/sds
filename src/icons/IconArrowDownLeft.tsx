import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconArrowDownLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M11.8991 5.23243C12.2115 4.92001 12.2115 4.41348 11.8991 4.10106C11.5867 3.78864 11.0801 3.78864 10.7677 4.10106L11.8991 5.23243ZM4.66675 11.3334H3.86675C3.86675 11.7752 4.22492 12.1334 4.66675 12.1334V11.3334ZM11.3334 12.1334C11.7752 12.1334 12.1334 11.7752 12.1334 11.3334C12.1334 10.8916 11.7752 10.5334 11.3334 10.5334V12.1334ZM5.46675 4.66675C5.46675 4.22492 5.10858 3.86675 4.66675 3.86675C4.22492 3.86675 3.86675 4.22492 3.86675 4.66675H5.46675ZM10.7677 4.10106L4.10106 10.7677L5.23243 11.8991L11.8991 5.23243L10.7677 4.10106ZM11.3334 10.5334H4.66675V12.1334H11.3334V10.5334ZM5.46675 11.3334V4.66675H3.86675V11.3334H5.46675Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconArrowDownLeft,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13030",
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
    example: ({ size }) => <IconArrowDownLeft size={size} />,
  },
);
