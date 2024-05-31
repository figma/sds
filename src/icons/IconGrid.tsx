import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconGrid = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H6.66667C7.08088 1.25 7.41667 1.58579 7.41667 2V6.66667C7.41667 7.08088 7.08088 7.41667 6.66667 7.41667H2C1.58579 7.41667 1.25 7.08088 1.25 6.66667V2ZM2.75 2.75V5.91667H5.91667V2.75H2.75ZM8.58333 2C8.58333 1.58579 8.91912 1.25 9.33333 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2V6.66667C14.75 7.08088 14.4142 7.41667 14 7.41667H9.33333C8.91912 7.41667 8.58333 7.08088 8.58333 6.66667V2ZM10.0833 2.75V5.91667H13.25V2.75H10.0833ZM1.25 9.33333C1.25 8.91912 1.58579 8.58333 2 8.58333H6.66667C7.08088 8.58333 7.41667 8.91912 7.41667 9.33333V14C7.41667 14.4142 7.08088 14.75 6.66667 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14V9.33333ZM2.75 10.0833V13.25H5.91667V10.0833H2.75ZM8.58333 9.33333C8.58333 8.91912 8.91912 8.58333 9.33333 8.58333H14C14.4142 8.58333 14.75 8.91912 14.75 9.33333V14C14.75 14.4142 14.4142 14.75 14 14.75H9.33333C8.91912 14.75 8.58333 14.4142 8.58333 14V9.33333ZM10.0833 10.0833V13.25H13.25V10.0833H10.0833Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconGrid, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13518", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconGrid size={size} /> });