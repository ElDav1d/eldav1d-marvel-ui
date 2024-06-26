import type { Meta, StoryObj } from '@storybook/react';

import CardsGrid from '../CardsGrid';

const meta: Meta<typeof CardsGrid> = {
  title: 'Molecules/CardsGrid',
  component: CardsGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardsGrid>;

export const Default: Story = {
  render: () => (
    <CardsGrid>
      <div>Card 1</div>
    </CardsGrid>
  ),
};
