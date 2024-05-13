import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Button } from './Button';

test('Button renders', () => {
  // ACT
  render(<Button label='testButton' />);

  const button = screen.getByRole('button', { name: 'testButton' });

  // ASSERT
  expect(button).toBeInTheDocument();
});
