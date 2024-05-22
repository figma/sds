import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowUpRight = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.66675 5.41675C4.25253 5.41675 3.91675 5.08096 3.91675 4.66675C3.91675 4.25253 4.25253 3.91675 4.66675 3.91675H11.3334C11.7476 3.91675 12.0834 4.25253 12.0834 4.66675V11.3334C12.0834 11.7476 11.7476 12.0834 11.3334 12.0834C10.9192 12.0834 10.5834 11.7476 10.5834 11.3334V6.47741L5.19708 11.8637C4.90418 12.1566 4.42931 12.1566 4.13642 11.8637C3.84352 11.5709 3.84352 11.096 4.13642 10.8031L9.52275 5.41675H4.66675Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowUpRight, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13041", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUpRight size={size} /> });