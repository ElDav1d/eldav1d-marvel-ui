import type { Args, Meta, StoryObj } from '@storybook/react';
// import { Args } from '@storybook/addons';

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

export const Default: Story = (args: Args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxGroup
      option='option'
      literal='Option'
      {...args}
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

Default.args = {};
