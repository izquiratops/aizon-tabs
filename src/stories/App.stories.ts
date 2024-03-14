import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import App from '../components/App/App';

const meta = {
  title: 'Example/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabButtons = canvas.getAllByTestId('tab-button');
    await userEvent.click(tabButtons[1]);
    await expect(canvas.getByText('Content of tab 2')).toBeInTheDocument();
  },
};
