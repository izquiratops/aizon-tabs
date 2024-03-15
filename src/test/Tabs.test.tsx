import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tab/Tab';

describe('Tab selection behavior', () => {
  beforeEach(() => {
    render(
      <Tabs>
        <Tab key="1" title="Tab 1">
          Content of the default selected tab.
        </Tab>
        <Tab key="2" title="Tab 2">
          Content of the second tab.
        </Tab>
      </Tabs>
    );
  });

  describe("On default selection without explicit 'defaultIndex'", () => {
    it('shows the content from Tab 1', () => {
      expect(screen.getByText(/default selected tab/i)).toBeInTheDocument();
    });

    it('hides the content from Tab 2', () => {
      expect(screen.queryByText(/second tab/i)).not.toBeInTheDocument();
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
      expect(screen.getByText(/second tab/i)).toBeInTheDocument();
    });

    it('hides the content from Tab 1', () => {
      expect(
        screen.queryByText(/default selected tab/i)
      ).not.toBeInTheDocument();
    });
  });
});

describe("Property 'defaultIndex'", () => {
  describe('On explicit default selection as index 1', () => {
    beforeAll(() => {
      render(
        <Tabs defaultIndex={1}>
          <Tab key="1" title="Tab 1">
            Content that should not appear anywhere.
          </Tab>
          <Tab key="2" title="Tab 2">
            Content of the default tab.
          </Tab>
        </Tabs>
      );
    });

    it('shows the content from Tab 2', () => {
      expect(screen.getByText(/default tab/i)).toBeInTheDocument();
    });

    it('hides the content from Tab 1', () => {
      expect(screen.queryByText(/should not appear/i)).not.toBeInTheDocument();
    });
  });
});
