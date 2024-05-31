import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconWifiOff = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12781)"><path fillRule="evenodd" clipRule="evenodd" d="M0.136418 0.136174C0.429311 -0.156719 0.904185 -0.156719 1.19708 0.136174L4.59876 3.53785C4.60687 3.5456 4.61482 3.55355 4.62259 3.56169L7.24766 6.18676C7.29175 6.22188 7.33195 6.26199 7.36732 6.30642L15.8637 14.8028C16.1566 15.0957 16.1566 15.5706 15.8637 15.8635C15.5709 16.1564 15.096 16.1564 14.8031 15.8635L10.4224 11.4828C10.2399 11.508 10.0478 11.4664 9.88571 11.3512C9.33581 10.9606 8.67797 10.7507 8.00342 10.7507C7.32886 10.7507 6.67102 10.9606 6.12112 11.3512C5.78345 11.5911 5.31524 11.5119 5.07534 11.1742C4.83544 10.8365 4.9147 10.3683 5.25237 10.1284C6.05607 9.55744 7.01753 9.25067 8.00342 9.25067C8.06709 9.25067 8.13065 9.25195 8.19409 9.2545L6.52836 7.58877C5.53202 7.82066 4.60204 8.28342 3.81449 8.94189C3.49672 9.20758 3.02372 9.16536 2.75803 8.84758C2.49234 8.52981 2.53456 8.05681 2.85234 7.79112C3.58791 7.17611 4.42457 6.69998 5.32129 6.38171L3.90687 4.96729C3.01161 5.37251 2.18112 5.90974 1.44346 6.56178C1.13311 6.8361 0.659135 6.8069 0.384808 6.49655C0.110481 6.1862 0.139684 5.71222 0.450035 5.4379C1.15968 4.81062 1.94389 4.27557 2.78385 3.84427L0.136418 1.19683C-0.156475 0.903941 -0.156475 0.429067 0.136418 0.136174ZM11.128 4.58935C9.86397 4.16873 8.52817 4.00709 7.20032 4.11408C6.78744 4.14735 6.42577 3.83962 6.3925 3.42674C6.35924 3.01387 6.66697 2.6522 7.07984 2.61893C8.60854 2.49575 10.1464 2.68184 11.6016 3.16609C13.0568 3.65033 14.3995 4.42282 15.5496 5.43742C15.8602 5.71144 15.8899 6.18539 15.6158 6.49601C15.3418 6.80662 14.8679 6.83628 14.5572 6.56226C13.5583 5.68096 12.392 5.00997 11.128 4.58935ZM10.4727 7.04423C10.6544 6.67198 11.1034 6.51749 11.4757 6.69916C12.0779 6.99306 12.641 7.36107 13.152 7.79464C13.4678 8.06263 13.5066 8.53592 13.2386 8.85176C12.9706 9.16759 12.4973 9.20637 12.1815 8.93837C11.7658 8.58566 11.3077 8.28628 10.8178 8.04719C10.4456 7.86552 10.2911 7.41648 10.4727 7.04423ZM7.25008 13.3332C7.25008 12.919 7.58587 12.5832 8.00008 12.5832H8.00675C8.42096 12.5832 8.75675 12.919 8.75675 13.3332C8.75675 13.7474 8.42096 14.0832 8.00675 14.0832H8.00008C7.58587 14.0832 7.25008 13.7474 7.25008 13.3332Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12781"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconWifiOff, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13669", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconWifiOff size={size} /> });