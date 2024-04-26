import { screen } from '@testing-library/react';

import { componentRenrer } from 'shared/lib/tests/componentRenrer/componentRenrer';

import { CustomLink, CustomLinkTheme } from './CustomLink';

describe('custom-link', () => {
  test('test render custom-link', () => {
    componentRenrer(
      <CustomLink to='https://www.google.by/?hl=ru'>Test</CustomLink>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test render custom-link with theme', () => {
    componentRenrer(
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
