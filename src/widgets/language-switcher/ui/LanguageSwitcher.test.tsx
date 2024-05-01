import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('language-switcher', () => {
  test('test language-switcher render', () => {
    componentRender(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  test('test language-switcher render with short', () => {
    componentRender(<LanguageSwitcher short />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });
});
