import clsx from "clsx";
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  type TabListProps as RACTabListProps,
  type TabPanelProps as RACTabPanelProps,
  type TabProps as RACTabProps,
  type TabsProps as RACTabsProps,
} from "react-aria-components";
import "./tab.css";

export type TabProps = RACTabProps;
export function Tab({ className, ...props }: TabProps) {
  const classNames = clsx(className, "tab");
  return <RACTab className={classNames} {...props} />;
}

export type TabListProps<T> = RACTabListProps<T>;
export function TabList<T extends object>({
  className,
  ...props
}: TabListProps<T>) {
  const classNames = clsx(className, "tab-list");
  return <RACTabList className={classNames} {...props} />;
}

export type TabPanelProps = RACTabPanelProps;
export function TabPanel({ className, ...props }: TabPanelProps) {
  const classNames = clsx(className, "tab-panel");
  return <RACTabPanel className={classNames} {...props} />;
}

export type TabsProps = RACTabsProps;
export function Tabs({ className, ...props }: TabsProps) {
  const classNames = clsx(className, "tabs");
  return <RACTabs className={classNames} {...props} />;
}
