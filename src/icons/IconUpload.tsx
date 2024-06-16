import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconUpload = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M14.8 10C14.8 9.55817 14.4418 9.2 14 9.2C13.5582 9.2 13.2 9.55817 13.2 10H14.8ZM2 12.6667H1.2H2ZM2.8 10C2.8 9.55817 2.44183 9.2 2 9.2C1.55817 9.2 1.2 9.55817 1.2 10H2.8ZM10.7676 5.89902C11.0801 6.21144 11.5866 6.21144 11.899 5.89902C12.2114 5.5866 12.2114 5.08007 11.899 4.76765L10.7676 5.89902ZM8 2L8.56569 1.43431C8.41566 1.28429 8.21217 1.2 8 1.2C7.78783 1.2 7.58434 1.28429 7.43431 1.43431L8 2ZM4.10098 4.76765C3.78856 5.08007 3.78856 5.5866 4.10098 5.89902C4.4134 6.21144 4.91993 6.21144 5.23235 5.89902L4.10098 4.76765ZM7.2 10C7.2 10.4418 7.55817 10.8 8 10.8C8.44183 10.8 8.8 10.4418 8.8 10H7.2ZM13.2 10V12.6667H14.8V10H13.2ZM13.2 12.6667C13.2 12.8081 13.1438 12.9438 13.0438 13.0438L14.1752 14.1752C14.5752 13.7751 14.8 13.2325 14.8 12.6667H13.2ZM13.0438 13.0438C12.9438 13.1438 12.8081 13.2 12.6667 13.2V14.8C13.2325 14.8 13.7751 14.5752 14.1752 14.1752L13.0438 13.0438ZM12.6667 13.2H3.33333V14.8H12.6667V13.2ZM3.33333 13.2C3.19189 13.2 3.05623 13.1438 2.95621 13.0438L1.82484 14.1752C2.22492 14.5752 2.76754 14.8 3.33333 14.8V13.2ZM2.95621 13.0438C2.85619 12.9438 2.8 12.8081 2.8 12.6667H1.2C1.2 13.2325 1.42476 13.7751 1.82484 14.1752L2.95621 13.0438ZM2.8 12.6667V10H1.2V12.6667H2.8ZM11.899 4.76765L8.56569 1.43431L7.43431 2.56569L10.7676 5.89902L11.899 4.76765ZM7.43431 1.43431L4.10098 4.76765L5.23235 5.89902L8.56569 2.56569L7.43431 1.43431ZM7.2 2V10H8.8V2H7.2Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconUpload,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13656",
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
    example: ({ size }) => <IconUpload size={size} />,
  },
);
