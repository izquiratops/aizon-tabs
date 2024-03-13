import React, { Component, createContext, useContext, useId, useState } from 'react';
import { TabProps, TabsContextType, TabsProps, TabsState } from './types';
import './Tabs.css';

export function Tab({ children, title }: TabProps) {
  const tabIndex = useId();
  const { activeTabIndex, setActiveTabIndex, setActiveTabContent } = useContext(TabsContext);

  const containerClassName = ['tab-wrapper'];
  const titleClassName = ['title'];

  if (activeTabIndex === tabIndex) {
    containerClassName.push('active');
    titleClassName.push('active');
  }

  const handleTabClick = () => {
    setActiveTabIndex(tabIndex);
    setActiveTabContent(children);
  }

  return (
    <li className={containerClassName.join(' ')} onClick={handleTabClick}>
      <span className={titleClassName.join(' ')}>
        {title}
      </span>
    </li>
  );
}

export const TabsContext = createContext({} as TabsContextType);

export function FunctionalTabs ({ children }: React.PropsWithChildren<TabsProps>) {
  const [activeTabIndex, setActiveTabIndex] = useState<string>();
  const [activeTabContent, setActiveTabContent] = useState<React.ReactNode>();

  return (
    <div className='tabs-container'>
        <nav>
          <TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex, setActiveTabContent }}>
            <ul className='tabs-nav'>
              {children}
            </ul>
          </TabsContext.Provider>
        </nav>
        <section className='content'>
          {activeTabContent}
        </section>
      </div>
  )
}

export class Tabs extends Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);

    this.state = {
      activeTab: this.props.defaultTab || 0
    }

    this.onClickTabHandler = this.onClickTabHandler.bind(this);
  }

  onClickTabHandler(index: number) {
    this.setState({ activeTab: index });

    if (this.props.onClick) {
      this.props.onClick(index);
    }
  }

  render() {
    const tabsNav = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const children: any = this.props.children;

    for (let i=0; i< children.length; i++) {
        const index = i;
        const child = children[i];
        const props = { ...child.props };

        props.onClick = () => {
            this.onClickTabHandler(index);
        };

        if (this.state.activeTab === i) {
          props.active = true;
        } else {
          props.active = false;
        }

        tabsNav.push(React.cloneElement(child, props));
    }

    const content = tabsNav[this.state.activeTab].props.children;

    return (
      <div className='tabs-container'>
        <nav>
          <ul className='tabs-nav'>
            {tabsNav}
          </ul>
        </nav>
        <section className='content'>
          {content}
        </section>
      </div>
    );
  }
}
