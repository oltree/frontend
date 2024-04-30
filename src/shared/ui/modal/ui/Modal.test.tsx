import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('modal', () => {
  test('test modal render', () => {
    render(<Modal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
