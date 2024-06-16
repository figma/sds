import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconPlay = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M3.33337 2L3.76598 1.32706C3.51981 1.16881 3.20688 1.1576 2.95002 1.29783C2.69316 1.43806 2.53337 1.70735 2.53337 2L3.33337 2ZM12.6667 8L13.0993 8.67294C13.3283 8.52574 13.4667 8.27221 13.4667 8C13.4667 7.72779 13.3283 7.47426 13.0993 7.32706L12.6667 8ZM3.33337 14H2.53337C2.53337 14.2926 2.69316 14.5619 2.95002 14.7022C3.20688 14.8424 3.51981 14.8312 3.76598 14.6729L3.33337 14ZM2.90077 2.67294L12.2341 8.67294L13.0993 7.32706L3.76598 1.32706L2.90077 2.67294ZM12.2341 7.32706L2.90077 13.3271L3.76598 14.6729L13.0993 8.67294L12.2341 7.32706ZM4.13337 14V2H2.53337V14H4.13337Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconPlay,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13586",
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
    example: ({ size }) => <IconPlay size={size} />,
  },
);
