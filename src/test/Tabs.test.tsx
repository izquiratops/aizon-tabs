import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../components/Tab/Tab';

describe('Tab selection behavior', () => {
  beforeEach(() => {
    render(
      <Tabs>
        {/* Default selection */}
        <Tab key="1" title="Tab 1">
          Content of tab 1
        </Tab>
        {/* Unselected */}
        <Tab key="2" title="Tab 2">
          Content of tab 2
        </Tab>
      </Tabs>
    );
  });

  describe('On default selection (Tab 1)', () => {
    it('shows the content from Tab 1', () => {
      expect(screen.getByText(/Content of tab 1/i)).toBeInTheDocument();
    });

    it('hides the content from Tab 2', () => {
      expect(screen.queryByText(/Content of tab 2/i)).not.toBeInTheDocument();
    });
  });

  describe('On switch to Tab 2', () => {
    beforeEach(() => {
      // Click on Tab 2
      // 'Tab 1' at position 0, 'Tab 2' at position 1
      act(() => {
        screen.getAllByTestId('tab-button').at(1)!.click();
      });
    });

    it('shows the content from Tab 2', () => {
      expect(screen.getByText(/Content of tab 2/i)).toBeInTheDocument();
    });

    it('hides the content from Tab 1', () => {
      expect(screen.queryByText(/Content of tab 1/i)).not.toBeInTheDocument();
    });
  });
});
