import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TabProps = {
  title: string;
  children: ReactNode;
};

export type TabsContextType = {
  activeTabIndex: number | undefined;
  setActiveTab: (index: number, content: ReactNode) => void;
  setCounter: Dispatch<SetStateAction<number>>;
};
