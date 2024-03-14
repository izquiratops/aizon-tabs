import Tab from '../Tab/Tab';
import Tabs from '../Tabs/Tabs';

export default function App() {
  return (
    <Tabs defaultIndex={1}>
      <Tab key="1" title="Tab 1">
        Content of tab 1
      </Tab>
      <Tab key="2" title="Tab 2">
        Content of tab 2
      </Tab>
    </Tabs>
  );
}
