import { screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/component-render';

import { CustomLink, CustomLinkTheme } from './CustomLink';

describe('custom-link', () => {
  test('test render custom-link', () => {
    ComponentRender(
      <CustomLink to='https://www.google.by/?hl=ru'>Test</CustomLink>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test render custom-link with theme', () => {
    ComponentRender(
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
