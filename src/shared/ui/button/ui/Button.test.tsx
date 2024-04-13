import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('button', () => {
  test('test render button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test render button with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
