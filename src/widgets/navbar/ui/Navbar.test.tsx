import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { Navbar } from './Navbar';

describe('navbar', () => {
  test('test navbar render', () => {
    renderWithTranslation(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
