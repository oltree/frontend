import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { CustomLink, CustomLinkTheme } from './CustomLink';

describe('custom-link', () => {
  test('test render custom-link', () => {
    componentRender(
      <CustomLink to='https://www.google.by/?hl=ru'>Test</CustomLink>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test render custom-link with theme', () => {
    componentRender(
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
