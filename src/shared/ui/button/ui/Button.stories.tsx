import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Text',
};
export const NormalDark = Template.bind({});
NormalDark.args = {
  ...Normal.args,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
  ...Clear.args,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};
export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  ...ClearInverted.args,
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
export const OutlineSizeMDark = Template.bind({});
OutlineSizeMDark.args = {
  ...OutlineSizeM.args,
};
OutlineSizeMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};
export const OutlineSizeLDark = Template.bind({});
OutlineSizeLDark.args = {
  ...OutlineSizeL.args,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};
export const OutlineSizeXlDark = Template.bind({});
OutlineSizeXlDark.args = {
  ...OutlineSizeXl.args,
};
OutlineSizeXlDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  ...Background.args,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  ...BackgroundInverted.args,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};
export const SquareSizeMDark = Template.bind({});
SquareSizeMDark.args = {
  ...SquareSizeM.args,
};
SquareSizeMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};
export const SquareSizeLDark = Template.bind({});
SquareSizeLDark.args = {
  ...SquareSizeL.args,
};
SquareSizeLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
export const SquareSizeXlDark = Template.bind({});
SquareSizeXlDark.args = {
  ...SquareSizeXl.args,
};
SquareSizeXlDark.decorators = [ThemeDecorator(Theme.DARK)];
