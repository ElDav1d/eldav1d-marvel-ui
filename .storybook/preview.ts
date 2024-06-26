import '../lib/lib.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1c1917' }, // equals to bg-stone-900
        { name: 'light', value: '#FFFFFF' },
        { name: 'grey', value: '#78716C' }, // equals to bg-stone-500
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
