import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { CustomLink, CustomLinkTheme } from './CustomLink';

export default {
  title: 'shared/CustomLink',
  component: CustomLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = args => (
  <CustomLink {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  children: 'Text',
  theme: CustomLinkTheme.PRIMARY,
};
export const NormalDark = Template.bind({});
NormalDark.args = {
  ...Normal.args,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Text',
  theme: CustomLinkTheme.INVERTED,
};
export const InvertedDark = Template.bind({});
InvertedDark.args = {
  ...Inverted.args,
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
