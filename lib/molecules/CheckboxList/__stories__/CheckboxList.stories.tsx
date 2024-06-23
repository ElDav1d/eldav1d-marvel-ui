import type { Meta, StoryObj } from '@storybook/react';

import CheckboxList from '../CheckboxList';
import { CheckboxGroup } from 'lib/molecules/CheckboxGroup';
import { useState } from 'react';

const meta: Meta<typeof CheckboxList> = {
  title: 'Molecules/CheckboxList',
  component: CheckboxList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckboxList>;
type OptionKey = 'option1' | 'option2' | 'option3';
type OptionsState = Record<OptionKey, boolean>;

export const Default: Story = () => {
  const initialState: OptionsState = {
    option1: false,
    option3: false,
    option2: false,
  };

  const [optionsState, setOptionsState] = useState(initialState);

  const options: OptionKey[] = ['option1', 'option2', 'option3'];

  const changeHandler = (option: OptionKey, index: number) => {
    setOptionsState((prevState) => ({
      ...prevState,
      [option]: !prevState[options[index]],
    }));
  };

  return (
    <CheckboxList options={options}>
      {(option, index) => (
        <CheckboxGroup
          option={option}
          literal={options[index]}
          isChecked={optionsState[option as OptionKey]}
          onChange={() => {
            changeHandler(option as OptionKey, index);
          }}
        />
      )}
    </CheckboxList>
  );
};

Default.args = {};
