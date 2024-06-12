import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/atoms/Input';
import { InputSelect } from '@/atoms/InputSelect';
import { CheckboxGroup } from 'lib/molecules/CheckboxGroup';
import { CheckboxList } from 'lib/molecules/CheckboxList';
import { useState } from 'react';
import FormGroupContainer from '../FormGroupContainer';

const meta: Meta<typeof FormGroupContainer> = {
  title: 'Molecules/FormGroupContainer',
  component: FormGroupContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormGroupContainer>;

export const Default: Story = {
  args: {
    title: 'Form Group Container Title',
    classNameFieldset: '',
    children: 'Form Group Container Children',
  },
};

export const WithTextInput: Story = {
  args: {
    title: 'Form Group Container Title',
    classNameFieldset: '',
    children: <Input type='text' className='' />,
  },
};

export const WithSelectInput: Story = {
  args: {
    title: 'Form Group Container Title',
    classNameFieldset: '',
    children: (
      <InputSelect
        ariaLabel='Select'
        onChange={() => {
          alert('I had changed');
        }}
        selectName='selectName'
        options={['Option 1', 'Option 2', 'Option 3']}
        optionLiterals={['Option 1', 'Option 2', 'Option 3']}
        placeholder='Select an option'
      />
    ),
  },
};

export const WithCheckboxList: Story = () => {
  type OptionKey = 'option1' | 'option2' | 'option3';
  type OptionsState = Record<OptionKey, boolean>;

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
    <FormGroupContainer title='Checkbox List'>
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
    </FormGroupContainer>
  );
};

WithCheckboxList.args = {};
