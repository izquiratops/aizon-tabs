import React, {
  Children,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { TabsContextType } from '../types';
import './Tabs.css';

export const TabsContext = React.createContext({} as TabsContextType);

export function Tabs({ children }: React.PropsWithChildren) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>();
  const [activeTabContent, setActiveTabContent] = useState<React.ReactNode>();

  const setActiveTab = useCallback(
    (index: number | undefined, content: ReactNode) => {
      setActiveTabIndex(index);
      setActiveTabContent(content);
    },
    [setActiveTabIndex, setActiveTabContent]
  );

  return (
    <div className="tabs-container">
      <nav>
        <TabsContext.Provider value={{ activeTabIndex, setActiveTab }}>
          <ul className="tabs-nav">
            {Children.map(children, (child, index) =>
              React.cloneElement(child as ReactElement, { index })
            )}
          </ul>
        </TabsContext.Provider>
      </nav>
      <section className="content">{activeTabContent}</section>
    </div>
  );
}
