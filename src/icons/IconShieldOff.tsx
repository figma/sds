import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconShieldOff = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15979)"><path d="M12.3625 9.09626C12.2315 9.51823 12.4674 9.96648 12.8893 10.0975C13.3113 10.2284 13.7596 9.99254 13.8905 9.57057L12.3625 9.09626ZM13.3332 8.00008L14.1332 8.00535V8.00008H13.3332ZM13.3332 3.33341H14.1332C14.1332 2.99994 13.9263 2.70144 13.6141 2.58435L13.3332 3.33341ZM7.99984 1.33341L8.28074 0.584351C8.09999 0.51657 7.90082 0.516432 7.71998 0.583962L7.99984 1.33341ZM5.61331 1.37063C5.1994 1.52519 4.98916 1.98603 5.14372 2.39994C5.29828 2.81385 5.75912 3.0241 6.17303 2.86953L5.61331 1.37063ZM3.43069 3.90374C3.84508 3.75047 4.05676 3.29029 3.90349 2.8759C3.75023 2.46151 3.29005 2.24982 2.87565 2.40309L3.43069 3.90374ZM2.6665 3.33341L2.38899 2.58309C2.07498 2.69923 1.8665 2.99862 1.8665 3.33341H2.6665ZM7.99984 14.6667L7.64207 15.3823C7.8728 15.4977 8.14502 15.4947 8.37318 15.3743L7.99984 14.6667ZM12.3414 12.2816C12.6368 11.953 12.6099 11.4472 12.2814 11.1518C11.9528 10.8564 11.447 10.8833 11.1516 11.2119L12.3414 12.2816ZM1.23219 0.101063C0.91977 -0.211357 0.413238 -0.211357 0.100818 0.101063C-0.211601 0.413482 -0.211601 0.920014 0.100818 1.23243L1.23219 0.101063ZM14.7675 15.8991C15.0799 16.2115 15.5864 16.2115 15.8989 15.8991C16.2113 15.5867 16.2113 15.0801 15.8989 14.7677L14.7675 15.8991ZM13.8905 9.57057C14.0479 9.06359 14.1297 8.53618 14.1332 8.00535L12.5332 7.99481C12.5307 8.36836 12.4732 8.7395 12.3625 9.09626L13.8905 9.57057ZM14.1332 8.00008V3.33341H12.5332V8.00008H14.1332ZM13.6141 2.58435L8.28074 0.584351L7.71894 2.08248L13.0523 4.08248L13.6141 2.58435ZM7.71998 0.583962L5.61331 1.37063L6.17303 2.86953L8.2797 2.08287L7.71998 0.583962ZM2.87565 2.40309L2.38899 2.58309L2.94402 4.08374L3.43069 3.90374L2.87565 2.40309ZM1.8665 3.33341V8.00008H3.4665V3.33341H1.8665ZM1.8665 8.00008C1.8665 10.3572 3.42523 12.227 4.80637 13.4355C5.51374 14.0544 6.21734 14.5378 6.7425 14.866C7.00592 15.0306 7.22658 15.1576 7.38322 15.2443C7.46159 15.2877 7.52409 15.321 7.56807 15.3441C7.59007 15.3557 7.60745 15.3647 7.61989 15.371C7.62611 15.3742 7.6311 15.3768 7.63481 15.3786C7.63666 15.3796 7.6382 15.3803 7.63941 15.381C7.64001 15.3813 7.64054 15.3815 7.64098 15.3817C7.6412 15.3819 7.64147 15.382 7.64158 15.382C7.64184 15.3822 7.64207 15.3823 7.99984 14.6667C8.35761 13.9512 8.3578 13.9513 8.35797 13.9514C8.358 13.9514 8.35815 13.9515 8.35821 13.9515C8.35832 13.9516 8.35836 13.9516 8.35832 13.9516C8.35824 13.9515 8.35785 13.9513 8.35714 13.951C8.35572 13.9502 8.35305 13.9489 8.34918 13.9469C8.34144 13.9429 8.32887 13.9365 8.31181 13.9275C8.27767 13.9096 8.22558 13.8818 8.15812 13.8444C8.02309 13.7697 7.82709 13.657 7.5905 13.5092C7.11567 13.2124 6.48593 12.7791 5.85997 12.2314C4.57444 11.1065 3.4665 9.64293 3.4665 8.00008H1.8665ZM8.37318 15.3743C9.868 14.5855 11.2115 13.5385 12.3414 12.2816L11.1516 11.2119C10.1478 12.3284 8.95438 13.2585 7.6265 13.9592L8.37318 15.3743ZM0.100818 1.23243L14.7675 15.8991L15.8989 14.7677L1.23219 0.101063L0.100818 1.23243Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_15979"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconShieldOff, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13610", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconShieldOff size={size} /> });