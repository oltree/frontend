import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/store';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

import Profile from './Profile';

export default {
  title: 'pages/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => <Profile {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'client',
        age: 26,
        country: Country.Belarus,
        lastname: 'melekh',
        first: 'oleg',
        city: 'Minsk',
        currency: Currency.USD,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'client',
        age: 26,
        country: Country.Belarus,
        lastname: 'melekh',
        first: 'oleg',
        city: 'Minsk',
        currency: Currency.USD,
      },
    },
  }),
];
