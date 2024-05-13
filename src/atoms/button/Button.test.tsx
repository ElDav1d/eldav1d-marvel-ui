import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Button } from './Button';

test('Button renders', () => {
  // ARRANGE
  const BUTTON_LABEL = 'testButton';

  // ACT
  render(<Button label={BUTTON_LABEL} />);

  const button = screen.getByRole('button', { name: 'wrong' });

  // ASSERT
  expect(button).toBeInTheDocument();
});
