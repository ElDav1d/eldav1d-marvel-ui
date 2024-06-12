import type { Meta, StoryObj } from '@storybook/react';
import CheckboxGroup from '../CheckboxGroup';
import { useState } from 'react';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxGroup
      option='option'
      literal='Option'
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

Default.args = {};
