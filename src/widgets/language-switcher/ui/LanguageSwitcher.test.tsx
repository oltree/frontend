import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('language-switcher', () => {
  test('test language-switcher render', () => {
    renderWithTranslation(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });
});