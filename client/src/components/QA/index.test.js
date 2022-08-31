import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from './index.jsx';

test('Contains container id in QA', () => {
  render(<QA />);

  expect(screen.queryByTestId('container')).toBeDefined();
});
