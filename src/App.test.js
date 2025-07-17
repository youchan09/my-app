import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const heading = screen.getByText(/hello, github actions/i);
  expect(heading).toBeInTheDocument();
});
