import type { Meta, StoryObj } from '@storybook/react';

import InputSelect from '../InputSelect';

const meta: Meta<typeof InputSelect> = {
  title: 'Atoms/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputSelect>;

export const Default: Story = {
  args: {
    className: '',
    ariaLabel: 'Select',
    onChange: () => {
      alert('I had changed!');
    },
    selectName: 'selectName',
    options: ['Option 1', 'Option 2', 'Option 3'],
    optionLiterals: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option',
  },
};
