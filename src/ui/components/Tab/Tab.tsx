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
import css from "./Tab.module.css";

export type TabProps = RACTabProps;
export function Tab({ ...props }: TabProps) {
  return <RACTab className={css.tab} {...props} />;
}

export type TabListProps<T> = RACTabListProps<T>;
export function TabList<T extends object>({ ...props }: TabListProps<T>) {
  return <RACTabList className={css.list} {...props} />;
}

export type TabPanelProps = RACTabPanelProps;
export function TabPanel({ ...props }: TabPanelProps) {
  return <RACTabPanel className={css.panel} {...props} />;
}

export type TabsProps = RACTabsProps;
export function Tabs({ ...props }: TabsProps) {
  return <RACTabs className={css.tabs} {...props} />;
}
