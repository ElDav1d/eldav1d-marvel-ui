import type { Meta, StoryObj } from '@storybook/react';

import TextInput from '../InputText';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/InputText',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    className: '',
  },
};
