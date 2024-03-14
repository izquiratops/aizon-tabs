import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';

export type TabsProps = {
  defaultIndex?: number;
}

export type TabProps = {
  title: string;
  selected?: boolean;
  children?: ReactNode;
};

export type TabsContextType = {
  defaultIndexRef: MutableRefObject<number>;
  activeTabIndex: number | undefined;
  setActiveTab: (index: number, content: ReactNode) => void;
  setCounter: Dispatch<SetStateAction<number>>;
};
