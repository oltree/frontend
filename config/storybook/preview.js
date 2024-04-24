import { addDecorator } from '@storybook/react';

import { Theme } from '../../src/app/providers/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/router';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/style';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
