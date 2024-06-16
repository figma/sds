import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconCloud = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15677)">
      <path
        d="M12 6.66663V5.86663V6.66663ZM11.16 6.66663L10.3854 6.86663C10.4766 7.21984 10.7952 7.46663 11.16 7.46663V6.66663ZM6 13.3333V12.5333H5.99941L6 13.3333ZM12 5.86663H11.16V7.46663H12V5.86663ZM11.9346 6.46663C11.6478 5.35572 11.0551 4.34755 10.2239 3.55666L9.12097 4.71578C9.73533 5.30035 10.1734 6.04552 10.3854 6.86663L11.9346 6.46663ZM10.2239 3.55666C9.39271 2.76577 8.35635 2.22389 7.23257 1.99257L6.90999 3.55972C7.74061 3.73069 8.50662 4.13121 9.12097 4.71578L10.2239 3.55666ZM7.23257 1.99257C6.1088 1.76126 4.94267 1.84979 3.8667 2.24811L4.42218 3.74859C5.21746 3.45418 6.07938 3.38874 6.90999 3.55972L7.23257 1.99257ZM3.8667 2.24811C2.79073 2.64644 1.84806 3.33858 1.1458 4.24589L2.41108 5.22521C2.93014 4.55459 3.62689 4.04301 4.42218 3.74859L3.8667 2.24811ZM1.1458 4.24589C0.443542 5.15319 0.00985807 6.23929 -0.105972 7.38076L1.48585 7.54229C1.57147 6.6986 1.89202 5.89583 2.41108 5.22521L1.1458 4.24589ZM-0.105972 7.38076C-0.221802 8.52224 -0.0151348 9.67331 0.490547 10.7032L1.92676 9.99801C1.55299 9.23679 1.40024 8.38599 1.48585 7.54229L-0.105972 7.38076ZM0.490547 10.7032C0.996229 11.7331 1.78065 12.6005 2.75467 13.2068L3.60024 11.8485C2.88031 11.4003 2.30052 10.7592 1.92676 9.99801L0.490547 10.7032ZM2.75467 13.2068C3.72869 13.8132 4.85327 14.1341 6.0006 14.1333L5.99941 12.5333C5.15138 12.5339 4.32017 12.2967 3.60024 11.8485L2.75467 13.2068ZM6 14.1333H12V12.5333H6V14.1333ZM12 14.1333C13.0962 14.1333 14.1476 13.6978 14.9227 12.9227L13.7913 11.7913C13.3162 12.2664 12.6719 12.5333 12 12.5333V14.1333ZM14.9227 12.9227C15.6979 12.1475 16.1333 11.0962 16.1333 9.99996H14.5333C14.5333 10.6718 14.2664 11.3162 13.7913 11.7913L14.9227 12.9227ZM16.1333 9.99996C16.1333 8.90373 15.6979 7.8524 14.9227 7.07725L13.7913 8.20862C14.2664 8.68371 14.5333 9.32808 14.5333 9.99996H16.1333ZM14.9227 7.07725C14.1476 6.3021 13.0962 5.86663 12 5.86663V7.46663C12.6719 7.46663 13.3162 7.73353 13.7913 8.20862L14.9227 7.07725Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15677">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconCloud,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13179",
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
    example: ({ size }) => <IconCloud size={size} />,
  },
);
