import React from 'react';
import { render, screen } from '@testing-library/react';
import Previewer from './Previewer';

test('renders learn react link', () => {
  render(<Previewer />);
  const previewer = screen.getByLabelText(/div/i);
  expect(previewer).toBeInTheDocument();
});
