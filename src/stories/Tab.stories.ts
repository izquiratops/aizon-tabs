import type { Meta, StoryObj } from '@storybook/react';
import Tab from '../components/Tab/Tab';

const meta = {
  title: 'Example/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Label text',
    },
    selected: {
      control: { type: 'bolean' },
      description: 'Selection state',
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedTab: Story = {
  args: {
    title: 'Example Tab 🌈',
    selected: true,
  },
};
