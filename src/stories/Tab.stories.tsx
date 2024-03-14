import type { Meta, StoryObj } from '@storybook/react';
import Tab from '../components/Tab/Tab';

const meta = {
  title: 'Aizon/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Label that appears centered in the tab.',
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Boolean that switches the style as selected or not.',
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
    title: '🌈 Example Tab 🌈',
    selected: true,
  },
};
