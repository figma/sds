import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMail = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.18156 3.67829L7.99992 7.75113L13.8183 3.67829C13.7131 3.52123 13.534 3.41663 13.3333 3.41663H2.66659C2.4658 3.41663 2.28674 3.52123 2.18156 3.67829ZM13.9166 5.44045L8.43002 9.28105C8.17178 9.46182 7.82806 9.46182 7.56982 9.28105L2.08325 5.44045V12C2.08325 12.3191 2.34747 12.5833 2.66659 12.5833H13.3333C13.6524 12.5833 13.9166 12.3191 13.9166 12V5.44045ZM0.583252 3.99996C0.583252 2.85241 1.51904 1.91663 2.66659 1.91663H13.3333C14.4808 1.91663 15.4166 2.85241 15.4166 3.99996V12C15.4166 13.1475 14.4808 14.0833 13.3333 14.0833H2.66659C1.51904 14.0833 0.583252 13.1475 0.583252 12V3.99996Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMail, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13544", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMail size={size} /> });