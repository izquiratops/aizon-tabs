import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App/App';

test('Renders successfully', () => {
  render(<App />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
