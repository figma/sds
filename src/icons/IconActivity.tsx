import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconActivity = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M14.6666 8.8C15.1085 8.8 15.4666 8.44183 15.4666 8C15.4666 7.55817 15.1085 7.2 14.6666 7.2V8.8ZM12 8V7.2C11.6556 7.2 11.3499 7.42034 11.241 7.74702L12 8ZM9.99998 14L9.24103 14.253C9.34992 14.5797 9.65563 14.8 9.99998 14.8C10.3443 14.8 10.65 14.5797 10.7589 14.253L9.99998 14ZM5.99998 2L6.75893 1.74702C6.65003 1.42034 6.34432 1.2 5.99998 1.2C5.65564 1.2 5.34992 1.42034 5.24103 1.74702L5.99998 2ZM3.99998 8V8.8C4.34432 8.8 4.65004 8.57966 4.75893 8.25298L3.99998 8ZM1.33331 7.2C0.891485 7.2 0.533313 7.55817 0.533313 8C0.533313 8.44183 0.891485 8.8 1.33331 8.8V7.2ZM14.6666 7.2H12V8.8H14.6666V7.2ZM11.241 7.74702L9.24103 13.747L10.7589 14.253L12.7589 8.25298L11.241 7.74702ZM10.7589 13.747L6.75893 1.74702L5.24103 2.25298L9.24103 14.253L10.7589 13.747ZM5.24103 1.74702L3.24103 7.74702L4.75893 8.25298L6.75893 2.25298L5.24103 1.74702ZM3.99998 7.2H1.33331V8.8H3.99998V7.2Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconActivity,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13018",
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
    example: ({ size }) => <IconActivity size={size} />,
  },
);
