import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconUserCheck = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16073)"><path d="M9.86667 14C9.86667 14.4418 10.2248 14.8 10.6667 14.8C11.1085 14.8 11.4667 14.4418 11.4667 14H9.86667ZM10.6667 12.6667H11.4667H10.6667ZM8 10V9.2V10ZM3.33334 10V9.2V10ZM0.666672 12.6667H-0.133328H0.666672ZM-0.133328 14C-0.133328 14.4418 0.224844 14.8 0.666672 14.8C1.1085 14.8 1.46667 14.4418 1.46667 14H-0.133328ZM11.899 6.76765C11.5866 6.45523 11.0801 6.45523 10.7677 6.76765C10.4552 7.08007 10.4552 7.5866 10.7677 7.89902L11.899 6.76765ZM12.6667 8.66667L12.101 9.23235C12.4134 9.54477 12.9199 9.54477 13.2324 9.23235L12.6667 8.66667ZM15.899 6.56569C16.2114 6.25327 16.2114 5.74673 15.899 5.43431C15.5866 5.1219 15.0801 5.1219 14.7677 5.43431L15.899 6.56569ZM11.4667 14V12.6667H9.86667V14H11.4667ZM11.4667 12.6667C11.4667 11.7472 11.1014 10.8655 10.4513 10.2154L9.31994 11.3467C9.67001 11.6968 9.86667 12.1716 9.86667 12.6667H11.4667ZM10.4513 10.2154C9.80118 9.56524 8.91942 9.2 8 9.2V10.8C8.49508 10.8 8.96987 10.9967 9.31994 11.3467L10.4513 10.2154ZM8 9.2H3.33334V10.8H8V9.2ZM3.33334 9.2C2.41392 9.2 1.53216 9.56524 0.882035 10.2154L2.01341 11.3467C2.36347 10.9967 2.83827 10.8 3.33334 10.8V9.2ZM0.882035 10.2154C0.231909 10.8655 -0.133328 11.7472 -0.133328 12.6667H1.46667C1.46667 12.1716 1.66334 11.6968 2.01341 11.3467L0.882035 10.2154ZM-0.133328 12.6667V14H1.46667V12.6667H-0.133328ZM7.53334 4.66667C7.53334 5.6976 6.6976 6.53333 5.66667 6.53333V8.13333C7.58126 8.13333 9.13334 6.58125 9.13334 4.66667H7.53334ZM5.66667 6.53333C4.63574 6.53333 3.80001 5.6976 3.80001 4.66667H2.20001C2.20001 6.58125 3.75208 8.13333 5.66667 8.13333V6.53333ZM3.80001 4.66667C3.80001 3.63574 4.63574 2.8 5.66667 2.8V1.2C3.75208 1.2 2.20001 2.75208 2.20001 4.66667H3.80001ZM5.66667 2.8C6.6976 2.8 7.53334 3.63574 7.53334 4.66667H9.13334C9.13334 2.75208 7.58126 1.2 5.66667 1.2V2.8ZM10.7677 7.89902L12.101 9.23235L13.2324 8.10098L11.899 6.76765L10.7677 7.89902ZM13.2324 9.23235L15.899 6.56569L14.7677 5.43431L12.101 8.10098L13.2324 9.23235Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_16073"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconUserCheck, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13655", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconUserCheck size={size} /> });