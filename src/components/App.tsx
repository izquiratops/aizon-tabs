import { Tabs, Tab, FunctionalTabs } from './Tabs';

export default function App() {
  return (
    <FunctionalTabs>
      <Tab key='1' title='Tab 1'>Content of tab 1</Tab>
      <Tab key='2' title='Tab 2'>Content of tab 2</Tab>
    </FunctionalTabs>
  );
}
