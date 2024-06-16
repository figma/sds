import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconTrello = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M4.66667 4.66667V3.86667C4.22484 3.86667 3.86667 4.22484 3.86667 4.66667H4.66667ZM6.66667 4.66667H7.46667C7.46667 4.22484 7.10849 3.86667 6.66667 3.86667V4.66667ZM6.66667 10.6667V11.4667C7.10849 11.4667 7.46667 11.1085 7.46667 10.6667H6.66667ZM4.66667 10.6667H3.86667C3.86667 11.1085 4.22484 11.4667 4.66667 11.4667V10.6667ZM9.33333 4.66667V3.86667C8.89151 3.86667 8.53333 4.22484 8.53333 4.66667H9.33333ZM11.3333 4.66667H12.1333C12.1333 4.22484 11.7752 3.86667 11.3333 3.86667V4.66667ZM11.3333 8V8.8C11.7752 8.8 12.1333 8.44183 12.1333 8H11.3333ZM9.33333 8H8.53333C8.53333 8.44183 8.89151 8.8 9.33333 8.8V8ZM3.33333 2.8H12.6667V1.2H3.33333V2.8ZM12.6667 2.8C12.9612 2.8 13.2 3.03878 13.2 3.33333H14.8C14.8 2.15513 13.8449 1.2 12.6667 1.2V2.8ZM13.2 3.33333V12.6667H14.8V3.33333H13.2ZM13.2 12.6667C13.2 12.9612 12.9612 13.2 12.6667 13.2V14.8C13.8449 14.8 14.8 13.8449 14.8 12.6667H13.2ZM12.6667 13.2H3.33333V14.8H12.6667V13.2ZM3.33333 13.2C3.03878 13.2 2.8 12.9612 2.8 12.6667H1.2C1.2 13.8449 2.15513 14.8 3.33333 14.8V13.2ZM2.8 12.6667V3.33333H1.2V12.6667H2.8ZM2.8 3.33333C2.8 3.03878 3.03878 2.8 3.33333 2.8V1.2C2.15513 1.2 1.2 2.15513 1.2 3.33333H2.8ZM4.66667 5.46667H6.66667V3.86667H4.66667V5.46667ZM5.86667 4.66667V10.6667H7.46667V4.66667H5.86667ZM6.66667 9.86667H4.66667V11.4667H6.66667V9.86667ZM5.46667 10.6667V4.66667H3.86667V10.6667H5.46667ZM9.33333 5.46667H11.3333V3.86667H9.33333V5.46667ZM10.5333 4.66667V8H12.1333V4.66667H10.5333ZM11.3333 7.2H9.33333V8.8H11.3333V7.2ZM10.1333 8V4.66667H8.53333V8H10.1333Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconTrello,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13641",
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
    example: ({ size }) => <IconTrello size={size} />,
  },
);
