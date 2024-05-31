import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconNavigation = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.197 0.802943C15.4211 1.02707 15.4802 1.36789 15.3445 1.65434L9.34449 14.321C9.20888 14.6073 8.90802 14.7775 8.59278 14.7463C8.27754 14.7151 8.01591 14.4892 7.93908 14.1818L6.71489 9.28507L1.81812 8.06088C1.51079 7.98405 1.28488 7.72242 1.25367 7.40718C1.22245 7.09194 1.39267 6.79108 1.67895 6.65547L14.3456 0.65547C14.6321 0.519784 14.9729 0.578819 15.197 0.802943ZM4.21503 7.11394L7.51525 7.939C7.78397 8.00618 7.99378 8.21599 8.06096 8.4847L8.88601 11.7849L13.0899 2.91006L4.21503 7.11394Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconNavigation, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13568", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconNavigation size={size} /> });