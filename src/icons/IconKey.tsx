import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconKey = (props: IconProps) => (
  <Icon {...props}><path d="M14.5657 1.899C14.8782 1.58658 14.8782 1.08005 14.5657 0.767627C14.2533 0.455208 13.7468 0.455208 13.4344 0.767628L14.5657 1.899ZM2.40806 12.9253L1.8326 13.4811L1.8386 13.4872L2.40806 12.9253ZM7.59273 7.74065L7.03696 8.31608C7.3508 8.61919 7.84964 8.61493 8.15825 8.30649L7.59273 7.74065ZM10.3334 4.99998L9.76771 4.43429L10.3334 4.99998ZM12.3334 6.99998L11.7677 7.56566C11.9177 7.71569 12.1212 7.79998 12.3334 7.79998C12.5456 7.79998 12.749 7.71569 12.8991 7.56566L12.3334 6.99998ZM14.6667 4.66665L15.2324 5.23233C15.3824 5.0823 15.4667 4.87882 15.4667 4.66665C15.4667 4.45447 15.3824 4.25099 15.2324 4.10096L14.6667 4.66665ZM13.4344 0.767628L12.101 2.10096L13.2324 3.23233L14.5657 1.899L13.4344 0.767628ZM7.03151 8.30944C7.30063 8.57498 7.51457 8.89113 7.66101 9.2397L9.13612 8.61998C8.90795 8.07687 8.57461 7.58426 8.15528 7.17052L7.03151 8.30944ZM7.66101 9.2397C7.80744 9.58826 7.88348 9.96234 7.88475 10.3404L9.48474 10.3351C9.48277 9.74597 9.36429 9.16309 9.13612 8.61998L7.66101 9.2397ZM7.88475 10.3404C7.88602 10.7185 7.81248 11.0931 7.66839 11.4426L9.14762 12.0524C9.37214 11.5078 9.48671 10.9241 9.48474 10.3351L7.88475 10.3404ZM7.66839 11.4426C7.52429 11.7921 7.31248 12.1097 7.04514 12.3771L8.17651 13.5084C8.59306 13.0919 8.9231 12.597 9.14762 12.0524L7.66839 11.4426ZM7.04514 12.3771C6.7778 12.6444 6.46022 12.8562 6.11069 13.0003L6.7205 14.4795C7.26513 14.255 7.75996 13.925 8.17651 13.5084L7.04514 12.3771ZM6.11069 13.0003C5.76115 13.1444 5.38657 13.2179 5.0085 13.2167L5.00314 14.8167C5.59222 14.8186 6.17588 14.7041 6.7205 14.4795L6.11069 13.0003ZM5.0085 13.2167C4.63042 13.2154 4.25634 13.1394 3.90778 12.9929L3.28806 14.468C3.83117 14.6962 4.41405 14.8147 5.00314 14.8167L5.0085 13.2167ZM3.90778 12.9929C3.55922 12.8465 3.24306 12.6326 2.97752 12.3634L1.8386 13.4872C2.25235 13.9065 2.74496 14.2399 3.28806 14.468L3.90778 12.9929ZM2.98349 12.3695C2.4613 11.8289 2.17236 11.1048 2.17889 10.3531L0.578953 10.3392C0.568776 11.5104 1.01899 12.6387 1.83263 13.4811L2.98349 12.3695ZM2.17889 10.3531C2.18542 9.6015 2.48691 8.8825 3.01841 8.351L1.88704 7.21963C1.05888 8.04778 0.58913 9.16808 0.578953 10.3392L2.17889 10.3531ZM3.01841 8.351C3.54991 7.81949 4.26891 7.51801 5.02054 7.51148L5.00664 5.91154C3.83549 5.92171 2.7152 6.39147 1.88704 7.21963L3.01841 8.351ZM5.02054 7.51148C5.77217 7.50495 6.4963 7.79389 7.03696 8.31608L8.1485 7.16522C7.30607 6.35158 6.17778 5.90136 5.00664 5.91154L5.02054 7.51148ZM8.15825 8.30649L8.15892 8.30583L7.02787 7.17413L7.0272 7.1748L8.15825 8.30649ZM8.15908 8.30566L10.8991 5.56566L9.76771 4.43429L7.02771 7.17429L8.15908 8.30566ZM9.76771 5.56566L11.7677 7.56566L12.8991 6.43429L10.8991 4.43429L9.76771 5.56566ZM12.8991 7.56566L15.2324 5.23233L14.101 4.10096L11.7677 6.43429L12.8991 7.56566ZM15.2324 4.10096L13.2324 2.10096L12.101 3.23233L14.101 5.23233L15.2324 4.10096ZM10.8991 5.56566L13.2324 3.23233L12.101 2.10096L9.76771 4.43429L10.8991 5.56566Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconKey, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13533", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconKey size={size} /> });