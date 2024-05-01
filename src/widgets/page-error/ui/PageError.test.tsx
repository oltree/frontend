import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { PageError } from './PageError';

describe('page-error', () => {
  test('test page-error render', () => {
    componentRender(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
