import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';

describe('loader', () => {
  test('test loader render', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
