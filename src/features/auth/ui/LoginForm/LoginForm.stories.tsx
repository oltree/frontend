import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { StoreDecorator } from 'shared/config/storybook/decorators/store';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
  <LoginForm {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    login: { username: 'test@mail.ru', password: '123456789qwerty' },
  }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    login: { username: 'test@mail.ru', password: '123456789qwerty' },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    login: {
      username: 'test@mail.ru',
      password: '123456789qwerty',
      error: 'error',
    },
  }),
];
export const WithErrorDark = Template.bind({});
WithErrorDark.args = {};
WithErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    login: {
      username: 'test@mail.ru',
      password: '123456789qwerty',
      error: 'error',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ login: { isLoading: true } })];
export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { isLoading: true } }),
];
