import type { Meta, StoryObj } from '@storybook/react';
import Tab from '../components/Tab/Tab';
import Tabs from '../components/Tabs/Tabs';

const meta = {
  title: 'Aizon/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultIndex: {
      description: 'Index that will be autoselected when Tabs mounts',
      table: {
        defaultValue: 0,
      }
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tab1Default: Story = {
  render: (args) => {
    const randomId = Math.floor(Math.random() * 100);

    return (
      <Tabs {...args}>
        <Tab key="1" title="Tab 1">
          <img src={`https://placedog.net/640/480?id=${randomId}`} alt="Place Dog" />
        </Tab>
        <Tab key="2" title="Tab 2">
          <img src={`https://placedog.net/640/480?id=${randomId + 1}`} alt="Place Dog" />
        </Tab>
      </Tabs>
    );
  },
  args: {
    defaultIndex: 0,
  },

  // TODO: Add interaction
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const tabButtons = canvas.getAllByTestId('tab-button');
  //   await userEvent.click(tabButtons[1]);
  //   await expect(canvas.getByText('Content of tab 2')).toBeInTheDocument();
  // },
};
