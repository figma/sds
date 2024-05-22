import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMinus = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.58337 8C2.58337 7.58579 2.91916 7.25 3.33337 7.25H12.6667C13.0809 7.25 13.4167 7.58579 13.4167 8C13.4167 8.41421 13.0809 8.75 12.6667 8.75H3.33337C2.91916 8.75 2.58337 8.41421 2.58337 8Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMinus, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13558", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinus size={size} /> });