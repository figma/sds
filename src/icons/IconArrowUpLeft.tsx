import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconArrowUpLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M10.7676 11.8991C11.08 12.2115 11.5866 12.2115 11.899 11.8991C12.2114 11.5867 12.2114 11.0801 11.899 10.7677L10.7676 11.8991ZM4.66663 4.66675V3.86675C4.2248 3.86675 3.86663 4.22492 3.86663 4.66675H4.66663ZM3.86663 11.3334C3.86663 11.7752 4.2248 12.1334 4.66663 12.1334C5.10845 12.1334 5.46663 11.7752 5.46663 11.3334H3.86663ZM11.3333 5.46675C11.7751 5.46675 12.1333 5.10858 12.1333 4.66675C12.1333 4.22492 11.7751 3.86675 11.3333 3.86675V5.46675ZM11.899 10.7677L5.23231 4.10106L4.10094 5.23243L10.7676 11.8991L11.899 10.7677ZM5.46663 11.3334V4.66675H3.86663V11.3334H5.46663ZM4.66663 5.46675H11.3333V3.86675H4.66663V5.46675Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconArrowUpLeft,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13039",
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
    example: ({ size }) => <IconArrowUpLeft size={size} />,
  },
);
