import React from 'react';
import { render, fireEvent, screen, getByLabelText } from '@testing-library/react';
import Editor from './Editor';

test('renders learn react link', () => {
    render(<Editor onChange={() => 'hello'}/>);
    let textarea = screen.getByLabelText(/textarea/i);
    expect(textarea).toBeInTheDocument();
});
