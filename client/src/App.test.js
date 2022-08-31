import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders the landing page', () => {
  render(<App />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});