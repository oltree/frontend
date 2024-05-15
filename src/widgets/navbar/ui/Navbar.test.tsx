import { screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/ComponentRender';

import { Navbar } from './Navbar';

describe('navbar', () => {
  test('test navbar render', () => {
    ComponentRender(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
