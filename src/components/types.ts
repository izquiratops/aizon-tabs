import { MouseEventHandler, ReactNode } from 'react';

export type TabProps = {
  title: string;
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
};

export type TabsState = {
  activeTab: number;
};

export type TabsProps = {
  children?: ReactNode[];
  defaultTab?: number;
  onClick?: (arg: number) => void;
};
