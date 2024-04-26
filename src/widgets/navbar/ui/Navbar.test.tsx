import { screen } from '@testing-library/react';

import { componentRenrer } from 'shared/lib/tests/componentRenrer/componentRenrer';

import { Navbar } from './Navbar';

describe('navbar', () => {
  test('test navbar render', () => {
    componentRenrer(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
