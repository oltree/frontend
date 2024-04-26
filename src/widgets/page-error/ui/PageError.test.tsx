import { screen } from '@testing-library/react';

import { componentRenrer } from 'shared/lib/tests/componentRenrer/componentRenrer';
import { PageError } from './PageError';

describe('page-error', () => {
  test('test page-error render', () => {
    componentRenrer(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
