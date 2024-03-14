import { useContext, useEffect, useRef } from 'react';
import { TabsContext } from '../Tabs/Tabs';
import { TabProps } from '../types';
import './Tab.css';

function Tab({ children, title, selected }: TabProps) {
  // Index of this Tab. The value is defined by the Tabs parent on mount
  const tabIndexRef = useRef<number>();
  // Tabs related methods
  const { defaultIndexRef, activeTabIndex, setActiveTab, setCounter } = useContext(TabsContext);

  // Style classes used on the HTML elements
  const containerClassName = ['tab-wrapper'];
  const titleClassName = ['title'];

  // Check selected state if exists OR check Tabs index current selection
  if (selected ?? activeTabIndex === tabIndexRef.current) {
    containerClassName.push('active');
    titleClassName.push('active');
  }

  useEffect(() => {
    // Optional chaining to not run this method if there's no context provided.
    setCounter?.((index) => {
      if (tabIndexRef.current === undefined) {
        // Assign index if it's undefined
        tabIndexRef.current = index;
        // Autoselect the first tab by default
        console.debug(tabIndexRef.current, defaultIndexRef.current);
        if (tabIndexRef.current === defaultIndexRef.current) {
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

export default Tab;
