import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconMinus = (props: IconProps) => (
  <Icon {...props}><path d="M3.33337 7.2C2.89155 7.2 2.53337 7.55817 2.53337 8C2.53337 8.44183 2.89155 8.8 3.33337 8.8V7.2ZM12.6667 8.8C13.1085 8.8 13.4667 8.44183 13.4667 8C13.4667 7.55817 13.1085 7.2 12.6667 7.2V8.8ZM3.33337 8.8H12.6667V7.2H3.33337V8.8Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMinus, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13558", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinus size={size} /> });