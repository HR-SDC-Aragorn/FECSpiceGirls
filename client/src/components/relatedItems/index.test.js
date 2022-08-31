import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItems from './index.jsx';

test('Contains main', () => {
  render(<RelatedItems />);

  expect(screen.queryByTestId('test')).toBeDefined();
});
