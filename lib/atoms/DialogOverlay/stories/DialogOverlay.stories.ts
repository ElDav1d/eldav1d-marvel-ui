import type { Meta, StoryObj } from '@storybook/react';

import DialogOverlay from '../DialogOverlay';

const meta: Meta<typeof DialogOverlay> = {
  title: 'Atoms/DialogOverlay',
  component: DialogOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogOverlay>;

export default meta;

type Story = StoryObj<typeof DialogOverlay>;

export const Default: Story = {
  args: {},
};
