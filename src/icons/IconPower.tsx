import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconPower = (props: IconProps) => (
  <Icon {...props}><path d="M12.8057 3.86099C12.4933 3.54852 11.9868 3.54844 11.6743 3.86081C11.3619 4.17318 11.3618 4.67971 11.6741 4.99218L12.8057 3.86099ZM7.99658 14.6685V15.4685V14.6685ZM4.31903 4.99218C4.6314 4.67971 4.63131 4.17318 4.31884 3.86081C4.00637 3.54844 3.49984 3.54852 3.18747 3.86099L4.31903 4.99218ZM8.79992 1.33325C8.79992 0.891424 8.44175 0.533252 7.99992 0.533252C7.55809 0.533252 7.19992 0.891424 7.19992 1.33325H8.79992ZM7.19992 7.99992C7.19992 8.44175 7.55809 8.79992 7.99992 8.79992C8.44175 8.79992 8.79992 8.44175 8.79992 7.99992H7.19992ZM11.6741 4.99218C12.4012 5.71948 12.8963 6.64603 13.0968 7.65469L14.6661 7.34274C14.4039 6.02373 13.7565 4.81208 12.8057 3.86099L11.6741 4.99218ZM13.0968 7.65469C13.2973 8.66334 13.1942 9.7088 12.8006 10.6589L14.2788 11.2713C14.7935 10.0289 14.9283 8.66175 14.6661 7.34274L13.0968 7.65469ZM12.8006 10.6589C12.407 11.609 11.7405 12.421 10.8854 12.9923L11.7742 14.3227C12.8924 13.5756 13.764 12.5137 14.2788 11.2713L12.8006 10.6589ZM10.8854 12.9923C10.0303 13.5636 9.02497 13.8685 7.99658 13.8685V15.4685C9.3414 15.4685 10.656 15.0698 11.7742 14.3227L10.8854 12.9923ZM7.99658 13.8685C6.96819 13.8685 5.96289 13.5636 5.1078 12.9923L4.21894 14.3227C5.33714 15.0698 6.65177 15.4685 7.99658 15.4685V13.8685ZM5.1078 12.9923C4.2527 12.421 3.5862 11.609 3.19257 10.6589L1.71442 11.2713C2.22916 12.5137 3.10073 13.5756 4.21894 14.3227L5.1078 12.9923ZM3.19257 10.6589C2.79895 9.7088 2.69587 8.66334 2.89638 7.65469L1.32708 7.34274C1.06488 8.66175 1.19968 10.0289 1.71442 11.2713L3.19257 10.6589ZM2.89638 7.65469C3.09688 6.64603 3.59197 5.71948 4.31903 4.99218L3.18747 3.86099C2.2367 4.81208 1.58928 6.02373 1.32708 7.34274L2.89638 7.65469ZM7.19992 1.33325V7.99992H8.79992V1.33325H7.19992Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconPower, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13592", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPower size={size} /> });