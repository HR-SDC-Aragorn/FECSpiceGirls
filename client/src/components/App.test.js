import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('Contains main', () => {
  render(<App />);

  expect(screen.queryByTestId('test')).toBeDefined();
});
