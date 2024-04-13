import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { PageError } from './PageError';

describe('page-error', () => {
  test('test page-error render', () => {
    renderWithTranslation(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
