import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { LanguageSwitcher } from './LanguageSwitcher';

export default {
  title: 'widgets/LanguageSwitcher',
  component: LanguageSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = args => (
  <LanguageSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightShort = Template.bind({});
LightShort.args = {
  short: true,
};
export const DarkShort = Template.bind({});
DarkShort.args = {
  short: true,
};
DarkShort.decorators = [ThemeDecorator(Theme.DARK)];
