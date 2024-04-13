import { render, screen } from '@testing-library/react';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('theme-switcher', () => {
  test('test theme-switcher render', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
});
