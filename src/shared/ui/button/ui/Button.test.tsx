import { render, screen } from '@testing-library/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

describe('button', () => {
  test('test render button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test render button with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });

  test('test render square button with theme', () => {
    render(<Button theme={ButtonTheme.BACKGROUND_INVERTED}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('backgroundInverted');
  });

  test('test render square button with theme and size', () => {
    render(
      <Button theme={ButtonTheme.BACKGROUND} size={ButtonSize.XL}>
        Test
      </Button>
    );
    expect(screen.getByText('Test')).toHaveClass('background');
  });
});
