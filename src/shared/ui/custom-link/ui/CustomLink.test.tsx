import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { CustomLink, CustomLinkTheme } from './CustomLink';

describe('custom-link', () => {
  test('test render custom-link', () => {
    renderWithTranslation(
      <CustomLink to='https://www.google.by/?hl=ru'>Test</CustomLink>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test render custom-link with theme', () => {
    renderWithTranslation(
      <CustomLink
        to='https://www.google.by/?hl=ru'
        theme={CustomLinkTheme.INVERTED}
      >
        Test
      </CustomLink>
    );
    expect(screen.getByText('Test')).toHaveClass('inverted');
  });
});
