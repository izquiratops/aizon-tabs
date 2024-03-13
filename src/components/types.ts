import { ReactNode } from 'react';

export type TabProps = {
  index?: number;
  title: string;
  children: ReactNode;
};

export type TabsContextType = {
  activeTabIndex: number | undefined;
  setActiveTab: (index: number, content: ReactNode) => void;
};
