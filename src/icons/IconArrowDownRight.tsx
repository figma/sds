import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconArrowDownRight = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M5.23243 4.10106C4.92001 3.78864 4.41348 3.78864 4.10106 4.10106C3.78864 4.41348 3.78864 4.92001 4.10106 5.23243L5.23243 4.10106ZM11.3334 11.3334V12.1334C11.7752 12.1334 12.1334 11.7752 12.1334 11.3334H11.3334ZM12.1334 4.66675C12.1334 4.22492 11.7752 3.86675 11.3334 3.86675C10.8916 3.86675 10.5334 4.22492 10.5334 4.66675H12.1334ZM4.66675 10.5334C4.22492 10.5334 3.86675 10.8916 3.86675 11.3334C3.86675 11.7752 4.22492 12.1334 4.66675 12.1334V10.5334ZM4.10106 5.23243L10.7677 11.8991L11.8991 10.7677L5.23243 4.10106L4.10106 5.23243ZM10.5334 4.66675V11.3334H12.1334V4.66675H10.5334ZM11.3334 10.5334H4.66675V12.1334H11.3334V10.5334Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconArrowDownRight,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13033",
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
    example: ({ size }) => <IconArrowDownRight size={size} />,
  },
);
