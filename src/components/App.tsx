import { Tab, Tabs } from './Tabs';

export default function App() {
  return (
    <Tabs>
      <Tab key="1" title="Tab 1">
        Content of tab 1
      </Tab>
      <Tab key="2" title="Tab 2">
        Content of tab 2
      </Tab>
    </Tabs>
  );
}
