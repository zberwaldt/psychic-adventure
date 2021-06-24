import React from 'react';
import { render, screen } from '@testing-library/react';
import Previewer from './Previewer';

test('renders learn react link', () => {
  render(<Previewer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
