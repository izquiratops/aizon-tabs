import { useContext, useEffect } from 'react';
import { TabsContext } from './Tabs';
import { TabProps } from './types';
import './Tabs.css';

export function Tab({ children, index, title }: TabProps) {
  const { activeTabIndex, setActiveTab } = useContext(TabsContext);

  const containerClassName = ['tab-wrapper'];
  const titleClassName = ['title'];

  if (activeTabIndex === index) {
    containerClassName.push('active');
    titleClassName.push('active');
  }

  useEffect(() => {
    // Autoselects on mount if it's the first sibling
    if (index === 0) {
      setActiveTab(index, children);
    }
  }, [index, children, setActiveTab]);

  const handleTabClick = () => {
    if (index) {
      setActiveTab(index, children);
    } else {
      throw new Error('Index not defined');
    }
  };

  return (
    <li className={containerClassName.join(' ')} onClick={handleTabClick}>
      <span className={titleClassName.join(' ')}>{title}</span>
    </li>
  );
}
