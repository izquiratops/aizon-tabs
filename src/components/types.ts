import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TabProps = {
  title: string;
  children: ReactNode;
};

export type TabsState = {
  activeTab: string;
};

export type TabsProps = {
  children?: ReactNode[];
  // onClick?: (arg: number) => void;
  // defaultTab?: string;
};

export type TabsContextType = {
  activeTabIndex: string | undefined;
  setActiveTabIndex: Dispatch<SetStateAction<string | undefined>>;
  setActiveTabContent: Dispatch<SetStateAction<ReactNode>>;
};
