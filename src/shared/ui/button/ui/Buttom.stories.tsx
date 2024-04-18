import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Text' },
};

export const Clear: Story = {
  args: { ...Primary.args, theme: ButtonTheme.CLEAR },
};

export const Outline: Story = {
  args: { ...Primary.args, theme: ButtonTheme.OUTLINE },
};
