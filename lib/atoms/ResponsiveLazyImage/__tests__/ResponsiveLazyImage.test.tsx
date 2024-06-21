import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import ResponsiveLazyImage from '../ResponsiveLazyImage';

test('renders being accessible', () => {
  // ARRANGE
  const TITLE = 'Spiderman';
  const ALT = 'The pic of Spiderman';
  const SINGLE_IMAGE_SINGLE_IMAGE_PATH =
    'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_fantastic.jpg';
  const SINGLE_IMAGE_PATH_UNAVAILABLE =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  // ACT
  render(
    <ResponsiveLazyImage
      isAvailable
      title={TITLE}
      alt={ALT}
      path={SINGLE_IMAGE_SINGLE_IMAGE_PATH}
      fallback={SINGLE_IMAGE_PATH_UNAVAILABLE}
    />,
  );

  // ASSERT
  expect(screen.getByRole('img', { name: /the pic of spiderman/i })).toBeInTheDocument();
});

test('renders with fallback image', () => {
  // ARRANGE
  const TITLE = 'Spiderman';
  const ALT = 'The pic of Spiderman';
  const SINGLE_IMAGE_PATH = undefined;
  const SINGLE_IMAGE_PATH_UNAVAILABLE =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  // ACT
  render(
    <ResponsiveLazyImage
      isAvailable
      title={TITLE}
      alt={ALT}
      path={SINGLE_IMAGE_PATH}
      fallback={SINGLE_IMAGE_PATH_UNAVAILABLE}
    />,
  );

  // ASSERT
  expect(screen.getByRole('img', { name: /the pic of spiderman/i })).toBeInTheDocument();
});

test('provides appropiate pic info to screenreaders', () => {
  // ARRANGE
  const TITLE = 'Spiderman';
  const ALT = 'The pic of Spiderman';
  const SINGLE_IMAGE_PATH = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  const SINGLE_IMAGE_PATH_UNAVAILABLE =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  // ACT
  render(
    <ResponsiveLazyImage
      isAvailable={false}
      title={TITLE}
      alt={ALT}
      path={SINGLE_IMAGE_PATH}
      fallback={SINGLE_IMAGE_PATH_UNAVAILABLE}
    />,
  );

  // ASSERT
  expect(
    screen.getByRole('img', { name: /the pic of spiderman is not available/i }),
  ).toBeInTheDocument();
});

test('provides alt text when no image', () => {
  // ARRANGE
  const TITLE = 'Spiderman';
  const ALT = 'The pic of Spiderman';
  const SINGLE_IMAGE_PATH = undefined;
  const SINGLE_IMAGE_PATH_UNAVAILABLE =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  // ACT
  render(
    <ResponsiveLazyImage
      isAvailable
      title={TITLE}
      alt={ALT}
      path={SINGLE_IMAGE_PATH}
      fallback={SINGLE_IMAGE_PATH_UNAVAILABLE}
    />,
  );

  // ASSERT
  expect(
    screen.getByRole('img', { name: /the pic of spiderman is not available/i }),
  ).toBeInTheDocument();
});

test('it does art direction when providing srcSet and sizes', () => {
  // ARRANGE
  const TITLE = 'Spiderman';
  const ALT = 'The pic of Spiderman';
  const SINGLE_IMAGE_PATH =
    'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_fantastic.jpg';
  const SINGLE_IMAGE_PATH_UNAVAILABLE =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  const SRCSET =
    'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_xlarge.jpg 200w, http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_fantastic.jpg 250w';
  const SIZES = '(max-width: 768px) 200px, 50vw';

  // ACT
  render(
    <ResponsiveLazyImage
      isAvailable
      title={TITLE}
      alt={ALT}
      path={SINGLE_IMAGE_PATH}
      fallback={SINGLE_IMAGE_PATH_UNAVAILABLE}
      srcSet={SRCSET}
      sizes={SIZES}
    />,
  );

  const image = screen.getByRole('img', { name: /the pic of spiderman/i });

  // ASSERT
  expect(image).toHaveAttribute('srcset', SRCSET);
  expect(image).toHaveAttribute('sizes', SIZES);
});

test('it does not art direction when providing srcSet and sizes', () => {
  // ARRANGE
  const TITLE = 'Spiderman';
  const ALT = 'The pic of Spiderman';
  const SINGLE_IMAGE_PATH =
    'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_fantastic.jpg';
  const SINGLE_IMAGE_PATH_UNAVAILABLE =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  // ACT
  render(
    <ResponsiveLazyImage
      isAvailable
      title={TITLE}
      alt={ALT}
      path={SINGLE_IMAGE_PATH}
      fallback={SINGLE_IMAGE_PATH_UNAVAILABLE}
    />,
  );

  const image = screen.getByRole('img', { name: /the pic of spiderman/i });

  // ASSERT
  expect(image).not.toHaveAttribute('srcset');
  expect(image).not.toHaveAttribute('sizes');
});
