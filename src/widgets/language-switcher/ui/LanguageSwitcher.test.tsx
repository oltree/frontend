import { screen } from '@testing-library/react';

import { componentRenrer } from 'shared/lib/tests/componentRenrer/componentRenrer';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('language-switcher', () => {
  test('test language-switcher render', () => {
    componentRenrer(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  test('test language-switcher render with short', () => {
    componentRenrer(<LanguageSwitcher short />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });
});
