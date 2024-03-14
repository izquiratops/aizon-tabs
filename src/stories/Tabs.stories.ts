import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import Tabs from '../components/Tabs/Tabs';

const meta = {
  title: 'Example/App',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultIndex: {
      control: { type: 'number' },
      description: 'Autoselected Tab index',
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tab1Default: Story = {
  args: {
    defaultIndex: 0,
  },
};

export const Tab2Default: Story = {
  args: {
    defaultIndex: 1,
  },
};

export const SwitchToTab2: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabButtons = canvas.getAllByTestId('tab-button');
    await userEvent.click(tabButtons[1]);
    await expect(canvas.getByText('Content of tab 2')).toBeInTheDocument();
  },
};
