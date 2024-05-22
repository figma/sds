import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconSquare = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.33333 2.75C3.01117 2.75 2.75 3.01117 2.75 3.33333V12.6667C2.75 12.9888 3.01117 13.25 3.33333 13.25H12.6667C12.9888 13.25 13.25 12.9888 13.25 12.6667V3.33333C13.25 3.01117 12.9888 2.75 12.6667 2.75H3.33333ZM1.25 3.33333C1.25 2.18274 2.18274 1.25 3.33333 1.25H12.6667C13.8173 1.25 14.75 2.18274 14.75 3.33333V12.6667C14.75 13.8173 13.8173 14.75 12.6667 14.75H3.33333C2.18274 14.75 1.25 13.8173 1.25 12.6667V3.33333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconSquare, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13624", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSquare size={size} /> });