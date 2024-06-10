import { ComponentMeta, ComponentStory } from '@storybook/react';

import avatar from 'shared/assets/tests/storybook.jpg';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = args => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'oleg',
    age: 26,
    country: Country.Belarus,
    lastname: 'melekh',
    first: 'oleg',
    city: 'Minsk',
    currency: Currency.USD,
    avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
