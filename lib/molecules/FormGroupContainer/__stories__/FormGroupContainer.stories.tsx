import type { Meta, StoryObj } from '@storybook/react';

import FormGroupContainer from '../FormGroupContainer';
import Input from '../../../atoms/Input/Input';

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
