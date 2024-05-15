import { screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/ComponentRender';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('language-switcher', () => {
  test('test language-switcher render', () => {
    ComponentRender(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  test('test language-switcher render with short', () => {
    ComponentRender(<LanguageSwitcher short />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });
});
