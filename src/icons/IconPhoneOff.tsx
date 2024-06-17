import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconPhoneOff = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15923)"><path d="M7.12008 8.87329C7.79665 9.55046 8.56129 10.1335 9.39341 10.6066L10.2401 9.75996C10.4213 9.58072 10.6502 9.45719 10.8995 9.40402C11.1488 9.35085 11.4081 9.37026 11.6467 9.45996C12.2516 9.68566 12.88 9.84221 13.5201 9.92663C13.8405 9.97191 14.1334 10.1321 14.3444 10.3775C14.5554 10.6228 14.6699 10.9364 14.6667 11.26V13.26C14.6675 13.4456 14.6295 13.6294 14.5551 13.7995C14.4807 13.9696 14.3716 14.1224 14.2348 14.2479C14.098 14.3734 13.9365 14.4689 13.7606 14.5284C13.5847 14.5879 13.3983 14.61 13.2134 14.5933C11.162 14.3704 9.19141 13.6694 7.46008 12.5466C6.65693 12.0367 5.91243 11.4397 5.24008 10.7666M3.46008 8.53996C2.33732 6.80863 1.63632 4.83807 1.41341 2.78663C1.39675 2.60227 1.41866 2.41647 1.47775 2.24104C1.53683 2.06562 1.6318 1.90442 1.75659 1.76771C1.88139 1.63099 2.03328 1.52177 2.20261 1.44697C2.37193 1.37218 2.55498 1.33347 2.74008 1.33329H4.74008C5.06362 1.33011 5.37728 1.44468 5.62259 1.65565C5.8679 1.86662 6.02813 2.15959 6.07341 2.47996C6.15783 3.12 6.31438 3.74844 6.54008 4.35329C6.62978 4.59191 6.64919 4.85124 6.59602 5.10055C6.54285 5.34986 6.41932 5.5787 6.24008 5.75996L5.39341 6.60663M15.3334 0.666626L0.666748 15.3333" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15923"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconPhoneOff, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13582", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPhoneOff size={size} /> });