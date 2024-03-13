import { useContext, useEffect, useRef } from 'react';
import { TabsContext } from '../Tabs/Tabs';
import { TabProps } from '../types';
import './Tab.css';

export function Tab({ children, title }: TabProps) {
  // Index of this Tab. The value is defined by the Tabs parent on mount
  const tabIndexRef = useRef<number>();
  // Tabs related methods
  const { activeTabIndex, setActiveTab, setCounter } = useContext(TabsContext);

  // Style classes used on the HTML elements
  const containerClassName = ['tab-wrapper'];
  const titleClassName = ['title'];

  if (activeTabIndex === tabIndexRef.current) {
    containerClassName.push('active');
    titleClassName.push('active');
  }

  useEffect(() => {
    setCounter((index) => {
      if (tabIndexRef.current === undefined) {
        // Assign index if it's undefined
        tabIndexRef.current = index;
        // Autoselect the first tab by default
        if (index === 0) {
          setActiveTab(index, children);
        }
        // Increase index counter for the next sibling
        index++;
      }

      return index;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabClick = () => {
    if (tabIndexRef.current !== undefined) {
      setActiveTab(tabIndexRef.current, children);
    } else {
      throw new Error('Index not defined');
    }
  };

  return (
    <li
      data-testid="tab-button"
      className={containerClassName.join(' ')}
      onClick={handleTabClick}
    >
      <span className={titleClassName.join(' ')}>{title}</span>
    </li>
  );
}
