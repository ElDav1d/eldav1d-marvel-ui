import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Neutral: Story = {
  args: {
    children: 'Button',
    onClick: () => alert('Button clicked'),
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    onClick: () => alert('Button clicked'),
  },
  parameters: {
    backgrounds: {
      default: 'grey',
    },
  },
};
