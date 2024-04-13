import { render, screen } from '@testing-library/react';

import { PageLoader } from './PageLoader';

describe('page-loader', () => {
  test('test page-loader render', () => {
    render(<PageLoader />);
    expect(screen.getByTestId('page-loader')).toBeInTheDocument();
  });
});
