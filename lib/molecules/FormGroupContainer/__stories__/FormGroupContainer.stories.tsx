import type { Meta, StoryObj } from '@storybook/react';

import FormGroupContainer from '../FormGroupContainer';
import { Input } from '../../../atoms/Input';
import { InputSelect } from '../../../atoms/InputSelect';

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
