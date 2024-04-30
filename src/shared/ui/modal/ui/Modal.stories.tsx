import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta in, molestias sed accusamus quas aspernatur numquam. Laborum eum, beatae suscipit deleniti, debitis ullam ipsam ad nostrum officiis, nesciunt esse.',
};
export const Dark = Template.bind({});
Dark.args = {
  ...Light.args,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
