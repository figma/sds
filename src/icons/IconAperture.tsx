import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconAperture = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15571)">
      <path
        d="M10.2328 4.93319C10.0118 4.55058 9.52254 4.41952 9.13992 4.64047C8.75731 4.86141 8.62625 5.3507 8.84719 5.73331L10.2328 4.93319ZM12.6739 12.36C12.8948 12.7426 13.3841 12.8737 13.7667 12.6527C14.1493 12.4318 14.2804 11.9425 14.0594 11.5599L12.6739 12.36ZM6.45998 4.53325C6.01815 4.53325 5.65998 4.89142 5.65998 5.33325C5.65998 5.77508 6.01815 6.13325 6.45998 6.13325V4.53325ZM14.1133 6.13325C14.5551 6.13325 14.9133 5.77508 14.9133 5.33325C14.9133 4.89142 14.5551 4.53325 14.1133 4.53325V6.13325ZM4.22719 7.59986C4.00625 7.98247 4.13731 8.47176 4.51992 8.69271C4.90254 8.91365 5.39182 8.78259 5.61277 8.39998L4.22719 7.59986ZM9.43943 1.77331C9.66038 1.3907 9.52932 0.901413 9.14671 0.680466C8.76409 0.459519 8.27481 0.590577 8.05386 0.973192L9.43943 1.77331ZM5.76719 11.0666C5.98814 11.4493 6.47742 11.5803 6.86004 11.3594C7.24265 11.1384 7.37371 10.6491 7.15277 10.2665L5.76719 11.0666ZM3.3261 3.63986C3.10515 3.25724 2.61587 3.12619 2.23325 3.34713C1.85064 3.56808 1.71958 4.05736 1.94053 4.43998L3.3261 3.63986ZM9.53998 11.4666C9.98181 11.4666 10.34 11.1084 10.34 10.6666C10.34 10.2248 9.98181 9.86658 9.53998 9.86658V11.4666ZM1.88665 9.86658C1.44482 9.86658 1.08665 10.2248 1.08665 10.6666C1.08665 11.1084 1.44482 11.4666 1.88665 11.4666V9.86658ZM11.7728 8.39998C11.9937 8.01736 11.8627 7.52808 11.48 7.30713C11.0974 7.08619 10.6081 7.21724 10.3872 7.59986L11.7728 8.39998ZM6.56053 14.2265C6.33958 14.6091 6.47064 15.0984 6.85325 15.3194C7.23587 15.5403 7.72515 15.4093 7.9461 15.0266L6.56053 14.2265ZM13.8666 7.99992C13.8666 11.24 11.2401 13.8666 7.99998 13.8666V15.4666C12.1237 15.4666 15.4666 12.1236 15.4666 7.99992H13.8666ZM7.99998 13.8666C4.75991 13.8666 2.13331 11.24 2.13331 7.99992H0.533313C0.533313 12.1236 3.87625 15.4666 7.99998 15.4666V13.8666ZM2.13331 7.99992C2.13331 4.75985 4.75991 2.13325 7.99998 2.13325V0.533252C3.87625 0.533252 0.533313 3.87619 0.533313 7.99992H2.13331ZM7.99998 2.13325C11.2401 2.13325 13.8666 4.75985 13.8666 7.99992H15.4666C15.4666 3.87619 12.1237 0.533252 7.99998 0.533252V2.13325ZM8.84719 5.73331L12.6739 12.36L14.0594 11.5599L10.2328 4.93319L8.84719 5.73331ZM6.45998 6.13325H14.1133V4.53325H6.45998V6.13325ZM5.61277 8.39998L9.43943 1.77331L8.05386 0.973192L4.22719 7.59986L5.61277 8.39998ZM7.15277 10.2665L3.3261 3.63986L1.94053 4.43998L5.76719 11.0666L7.15277 10.2665ZM9.53998 9.86658H1.88665V11.4666H9.53998V9.86658ZM10.3872 7.59986L6.56053 14.2265L7.9461 15.0266L11.7728 8.39998L10.3872 7.59986Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15571">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconAperture,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13029",
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
    example: ({ size }) => <IconAperture size={size} />,
  },
);
