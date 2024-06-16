import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconUserPlus = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_16077)">
      <path
        d="M9.86663 14C9.86663 14.4418 10.2248 14.8 10.6666 14.8C11.1085 14.8 11.4666 14.4418 11.4666 14H9.86663ZM10.6666 12.6667H11.4666H10.6666ZM7.99996 10V9.2V10ZM3.33329 10V9.2V10ZM0.666626 12.6667H-0.133374H0.666626ZM-0.133374 14C-0.133374 14.4418 0.224798 14.8 0.666626 14.8C1.10845 14.8 1.46663 14.4418 1.46663 14H-0.133374ZM14.1333 5.33333C14.1333 4.89151 13.7751 4.53333 13.3333 4.53333C12.8915 4.53333 12.5333 4.89151 12.5333 5.33333H14.1333ZM12.5333 9.33333C12.5333 9.77516 12.8915 10.1333 13.3333 10.1333C13.7751 10.1333 14.1333 9.77516 14.1333 9.33333H12.5333ZM15.3333 8.13333C15.7751 8.13333 16.1333 7.77516 16.1333 7.33333C16.1333 6.89151 15.7751 6.53333 15.3333 6.53333V8.13333ZM11.3333 6.53333C10.8915 6.53333 10.5333 6.89151 10.5333 7.33333C10.5333 7.77516 10.8915 8.13333 11.3333 8.13333V6.53333ZM11.4666 14V12.6667H9.86663V14H11.4666ZM11.4666 12.6667C11.4666 11.7472 11.1014 10.8655 10.4513 10.2154L9.31989 11.3467C9.66996 11.6968 9.86663 12.1716 9.86663 12.6667H11.4666ZM10.4513 10.2154C9.80114 9.56524 8.91938 9.2 7.99996 9.2V10.8C8.49503 10.8 8.96982 10.9967 9.31989 11.3467L10.4513 10.2154ZM7.99996 9.2H3.33329V10.8H7.99996V9.2ZM3.33329 9.2C2.41388 9.2 1.53212 9.56524 0.881989 10.2154L2.01336 11.3467C2.36343 10.9967 2.83822 10.8 3.33329 10.8V9.2ZM0.881989 10.2154C0.231863 10.8655 -0.133374 11.7472 -0.133374 12.6667H1.46663C1.46663 12.1716 1.66329 11.6968 2.01336 11.3467L0.881989 10.2154ZM-0.133374 12.6667V14H1.46663V12.6667H-0.133374ZM7.53329 4.66667C7.53329 5.6976 6.69756 6.53333 5.66663 6.53333V8.13333C7.58121 8.13333 9.13329 6.58125 9.13329 4.66667H7.53329ZM5.66663 6.53333C4.63569 6.53333 3.79996 5.6976 3.79996 4.66667H2.19996C2.19996 6.58125 3.75204 8.13333 5.66663 8.13333V6.53333ZM3.79996 4.66667C3.79996 3.63574 4.63569 2.8 5.66663 2.8V1.2C3.75204 1.2 2.19996 2.75208 2.19996 4.66667H3.79996ZM5.66663 2.8C6.69756 2.8 7.53329 3.63574 7.53329 4.66667H9.13329C9.13329 2.75208 7.58121 1.2 5.66663 1.2V2.8ZM12.5333 5.33333V9.33333H14.1333V5.33333H12.5333ZM15.3333 6.53333H11.3333V8.13333H15.3333V6.53333Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_16077">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconUserPlus,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13657",
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
    example: ({ size }) => <IconUserPlus size={size} />,
  },
);
