import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Loader from '../Loader';

test('Loader component renders with correct role', () => {
  const loadingLabel = 'Loading...';

  render(<Loader loadingLabel={loadingLabel} />);

  const loader = screen.getByRole('alert');

  expect(loader).toBeInTheDocument();
});

test('Loader component renders with correct accessibility attributes', () => {
  const loadingLabel = 'Loading...';

  render(<Loader loadingLabel={loadingLabel} />);

  const loader = screen.getByRole('alert');

  expect(loader).toHaveAttribute('aria-label', loadingLabel);
  expect(loader).toHaveAttribute('aria-busy', 'true');
  expect(loader).toHaveAttribute('aria-live', 'polite');
});
