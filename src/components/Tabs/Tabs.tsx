import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useRef,
  useState,
} from 'react';
import { TabsContextType, TabsProps } from '../types';
import './Tabs.css';

export const TabsContext = createContext({} as TabsContextType);

function Tabs({ children, defaultIndex }: PropsWithChildren<TabsProps>) {
  // TODO: ...
  const defaultIndexRef = useRef(defaultIndex ?? 0);
  // Counter used for assign child index
  const [, setCounter] = useState(0);
  // Index value of the current selected Tab
  const [activeTabIndex, setActiveTabIndex] = useState<number>();
  // React node assigned to the current selected Tab
  const [activeTabContent, setActiveTabContent] = useState<ReactNode>();

  // Method to assign a new Tab selection
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
        <ul className="tabs-nav">
          <TabsContext.Provider
            value={{ defaultIndexRef, activeTabIndex, setActiveTab, setCounter }}
          >
            {children}
          </TabsContext.Provider>
        </ul>
      </nav>
      <section className="content">{activeTabContent}</section>
    </div>
  );
}

export default Tabs;
