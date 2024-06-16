import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconMinimize = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M6.13333 2C6.13333 1.55817 5.77516 1.2 5.33333 1.2C4.89151 1.2 4.53333 1.55817 4.53333 2H6.13333ZM5.33333 4H6.13333H5.33333ZM4 5.33333V6.13333V5.33333ZM2 4.53333C1.55817 4.53333 1.2 4.89151 1.2 5.33333C1.2 5.77516 1.55817 6.13333 2 6.13333V4.53333ZM14 6.13333C14.4418 6.13333 14.8 5.77516 14.8 5.33333C14.8 4.89151 14.4418 4.53333 14 4.53333V6.13333ZM12 5.33333V6.13333V5.33333ZM10.6667 4H11.4667H10.6667ZM11.4667 2C11.4667 1.55817 11.1085 1.2 10.6667 1.2C10.2248 1.2 9.86667 1.55817 9.86667 2H11.4667ZM9.86667 14C9.86667 14.4418 10.2248 14.8 10.6667 14.8C11.1085 14.8 11.4667 14.4418 11.4667 14H9.86667ZM10.6667 12H11.4667H10.6667ZM12 10.6667V11.4667V10.6667ZM14 11.4667C14.4418 11.4667 14.8 11.1085 14.8 10.6667C14.8 10.2248 14.4418 9.86667 14 9.86667V11.4667ZM2 9.86667C1.55817 9.86667 1.2 10.2248 1.2 10.6667C1.2 11.1085 1.55817 11.4667 2 11.4667V9.86667ZM4 10.6667V11.4667V10.6667ZM5.33333 12H6.13333H5.33333ZM4.53333 14C4.53333 14.4418 4.89151 14.8 5.33333 14.8C5.77516 14.8 6.13333 14.4418 6.13333 14H4.53333ZM4.53333 2V4H6.13333V2H4.53333ZM4.53333 4C4.53333 4.14145 4.47714 4.2771 4.37712 4.37712L5.50849 5.50849C5.90857 5.10842 6.13333 4.56579 6.13333 4H4.53333ZM4.37712 4.37712C4.2771 4.47714 4.14145 4.53333 4 4.53333V6.13333C4.56579 6.13333 5.10842 5.90857 5.50849 5.50849L4.37712 4.37712ZM4 4.53333H2V6.13333H4V4.53333ZM14 4.53333H12V6.13333H14V4.53333ZM12 4.53333C11.8586 4.53333 11.7229 4.47714 11.6229 4.37712L10.4915 5.50849C10.8916 5.90857 11.4342 6.13333 12 6.13333V4.53333ZM11.6229 4.37712C11.5229 4.2771 11.4667 4.14145 11.4667 4H9.86667C9.86667 4.5658 10.0914 5.10842 10.4915 5.50849L11.6229 4.37712ZM11.4667 4V2H9.86667V4H11.4667ZM11.4667 14V12H9.86667V14H11.4667ZM11.4667 12C11.4667 11.8586 11.5229 11.7229 11.6229 11.6229L10.4915 10.4915C10.0914 10.8916 9.86667 11.4342 9.86667 12H11.4667ZM11.6229 11.6229C11.7229 11.5229 11.8586 11.4667 12 11.4667V9.86667C11.4342 9.86667 10.8916 10.0914 10.4915 10.4915L11.6229 11.6229ZM12 11.4667H14V9.86667H12V11.4667ZM2 11.4667H4V9.86667H2V11.4667ZM4 11.4667C4.14145 11.4667 4.2771 11.5229 4.37712 11.6229L5.50849 10.4915C5.10842 10.0914 4.5658 9.86667 4 9.86667V11.4667ZM4.37712 11.6229C4.47714 11.7229 4.53333 11.8586 4.53333 12H6.13333C6.13333 11.4342 5.90857 10.8916 5.50849 10.4915L4.37712 11.6229ZM4.53333 12V14H6.13333V12H4.53333Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconMinimize,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13557",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMinimize size={size} />,
  },
);
