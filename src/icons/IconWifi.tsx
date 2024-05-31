import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconWifi = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.00012 4.08496C5.58559 4.08496 3.25402 4.96588 1.44272 6.56249C1.132 6.83638 0.658061 6.80653 0.384162 6.4958C0.110264 6.18507 0.14012 5.71114 0.450849 5.43724C2.53612 3.59913 5.22037 2.58496 8.00012 2.58496C10.7799 2.58496 13.4641 3.59913 15.5494 5.43724C15.8601 5.71114 15.89 6.18507 15.6161 6.4958C15.3422 6.80653 14.8682 6.83638 14.5575 6.56249C12.7462 4.96588 10.4146 4.08496 8.00012 4.08496ZM8.02679 7.41794C6.48725 7.41794 4.9964 7.9575 3.81345 8.94281C3.49518 9.20791 3.02227 9.1648 2.75717 8.84653C2.49208 8.52826 2.53518 8.05534 2.85345 7.79025C4.30593 6.58044 6.13647 5.91794 8.02679 5.91794C9.91711 5.91794 11.7476 6.58044 13.2001 7.79025C13.5184 8.05534 13.5615 8.52826 13.2964 8.84653C13.0313 9.1648 12.5584 9.20791 12.2401 8.94281C11.0572 7.9575 9.56633 7.41794 8.02679 7.41794ZM8.00345 10.7507C7.3289 10.7507 6.67106 10.9606 6.12116 11.3513C5.78349 11.5912 5.31528 11.5119 5.07538 11.1742C4.83548 10.8366 4.91474 10.3684 5.25241 10.1285C6.05611 9.55746 7.01757 9.2507 8.00345 9.2507C8.98934 9.2507 9.95079 9.55746 10.7545 10.1285C11.0922 10.3684 11.1714 10.8366 10.9315 11.1742C10.6916 11.5119 10.2234 11.5912 9.88575 11.3513C9.33584 10.9606 8.67801 10.7507 8.00345 10.7507ZM7.25012 13.3332C7.25012 12.919 7.58591 12.5832 8.00012 12.5832H8.00679C8.421 12.5832 8.75679 12.919 8.75679 13.3332C8.75679 13.7474 8.421 14.0832 8.00679 14.0832H8.00012C7.58591 14.0832 7.25012 13.7474 7.25012 13.3332Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconWifi, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13672", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconWifi size={size} /> });