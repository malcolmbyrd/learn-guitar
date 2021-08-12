import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {control: 'text' },
    className: {control: 'text'},
    placeholder: {control: 'text'},
    id: {control: 'text'}
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'Text input'
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  placeholder: 'Number input'
};
