import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconToggleRight = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_16037)">
      <path
        d="M5.33334 4.13325H10.6667V2.53325H5.33334V4.13325ZM10.6667 4.13325C12.8022 4.13325 14.5333 5.86442 14.5333 7.99992H16.1333C16.1333 4.98076 13.6858 2.53325 10.6667 2.53325V4.13325ZM14.5333 7.99992C14.5333 10.1354 12.8022 11.8666 10.6667 11.8666V13.4666C13.6858 13.4666 16.1333 11.0191 16.1333 7.99992H14.5333ZM10.6667 11.8666H5.33334V13.4666H10.6667V11.8666ZM5.33334 11.8666C3.19784 11.8666 1.46667 10.1354 1.46667 7.99992H-0.133328C-0.133328 11.0191 2.31418 13.4666 5.33334 13.4666V11.8666ZM1.46667 7.99992C1.46667 5.86442 3.19784 4.13325 5.33334 4.13325V2.53325C2.31418 2.53325 -0.133328 4.98076 -0.133328 7.99992H1.46667ZM11.8667 7.99992C11.8667 8.66266 11.3294 9.19992 10.6667 9.19992V10.7999C12.2131 10.7999 13.4667 9.54632 13.4667 7.99992H11.8667ZM10.6667 9.19992C10.0039 9.19992 9.46667 8.66266 9.46667 7.99992H7.86667C7.86667 9.54632 9.12027 10.7999 10.6667 10.7999V9.19992ZM9.46667 7.99992C9.46667 7.33718 10.0039 6.79992 10.6667 6.79992V5.19992C9.12027 5.19992 7.86667 6.45352 7.86667 7.99992H9.46667ZM10.6667 6.79992C11.3294 6.79992 11.8667 7.33718 11.8667 7.99992H13.4667C13.4667 6.45352 12.2131 5.19992 10.6667 5.19992V6.79992Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_16037">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconToggleRight,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13637",
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
    example: ({ size }) => <IconToggleRight size={size} />,
  },
);
