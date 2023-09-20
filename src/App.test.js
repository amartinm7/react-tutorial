import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello text', () => {
  render(<App />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});
