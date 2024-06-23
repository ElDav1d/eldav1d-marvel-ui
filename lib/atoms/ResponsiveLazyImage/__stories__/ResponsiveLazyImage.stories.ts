import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveLazyImage from '../ResponsiveLazyImage';

const meta: Meta<typeof ResponsiveLazyImage> = {
  title: 'Atoms/ResponsiveLazyImage',
  component: ResponsiveLazyImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResponsiveLazyImage>;

const IMAGE_PATH =
  'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_fantastic.jpg';
const IMAGE_PATH_XL =
  'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_xlarge.jpg';
const IMAGE_PATH_LAZY =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/220px-Smiley.svg.png';
const IMAGE_PATH_UNAVAILABLE =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

export const Default: Story = {
  args: {
    title: 'Spiderman',
    alt: 'The pic of Spiderman',
    path: IMAGE_PATH,
    fallback: IMAGE_PATH_UNAVAILABLE,
    isAvailable: true,
  },
};

export const WithFallback: Story = {
  args: {
    title: 'Spiderman',
    alt: 'The pic of Spiderman',
    path: undefined,
    fallback: IMAGE_PATH_UNAVAILABLE,
    isAvailable: true,
  },
};

export const WithLazyFallback: Story = {
  args: {
    title: 'Spiderman',
    alt: 'The pic of Spiderman',
    path: IMAGE_PATH,
    fallback: IMAGE_PATH_UNAVAILABLE,
    lazyFallback: IMAGE_PATH_LAZY,
    isAvailable: true,
  },
};

export const WithUnavailable: Story = {
  args: {
    title: 'Spiderman',
    alt: 'The pic of Spiderman',
    path: IMAGE_PATH_UNAVAILABLE,
    fallback: IMAGE_PATH_UNAVAILABLE,
    isAvailable: false,
  },
};

export const WitArtDirection: Story = {
  args: {
    title: 'Spiderman',
    alt: 'The pic of Spiderman',
    path: IMAGE_PATH,
    fallback: IMAGE_PATH_UNAVAILABLE,
    isAvailable: true,
    srcSet: `${IMAGE_PATH} 200px, ${IMAGE_PATH_XL} 250px`,
    sizes: '(max-width: 768px) 200px, 250px',
  },
};

export const WithLazyFallbackArtDirection: Story = {
  args: {
    title: 'Spiderman',
    alt: 'The pic of Spiderman',
    path: IMAGE_PATH,
    fallback: IMAGE_PATH_UNAVAILABLE,
    lazyFallback: IMAGE_PATH_LAZY,
    isAvailable: true,
    srcSet: `${IMAGE_PATH} 200px, ${IMAGE_PATH_XL} 250px`,
    sizes: '(max-width: 768px) 200px, 250px',
  },
};
