import { ComponentMeta, ComponentStory } from '@storybook/react';

import Articles from './Articles';

export default {
  title: 'pages/Articles',
  component: Articles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = args => (
  <Articles {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
