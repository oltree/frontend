import { screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/component-render';
import { PageError } from './PageError';

describe('page-error', () => {
  test('test page-error render', () => {
    ComponentRender(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
