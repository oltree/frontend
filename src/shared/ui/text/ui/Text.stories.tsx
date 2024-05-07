import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};
export const Dark = Template.bind({});
Dark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR,
};
export const ErrorDark = Template.bind({});
ErrorDark.args = {
  ...Error.args,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem ipsun',
};
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title lorem ipsun',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description Description Description Description',
};
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
