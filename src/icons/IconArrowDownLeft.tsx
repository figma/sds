import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowDownLeft = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.66675 3.91675C5.08096 3.91675 5.41675 4.25253 5.41675 4.66675V9.52275L10.8031 4.13642C11.096 3.84352 11.5709 3.84352 11.8637 4.13642C12.1566 4.42931 12.1566 4.90418 11.8637 5.19708L6.47741 10.5834H11.3334C11.7476 10.5834 12.0834 10.9192 12.0834 11.3334C12.0834 11.7476 11.7476 12.0834 11.3334 12.0834H4.66675C4.25253 12.0834 3.91675 11.7476 3.91675 11.3334V4.66675C3.91675 4.25253 4.25253 3.91675 4.66675 3.91675Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowDownLeft, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13030", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowDownLeft size={size} /> });