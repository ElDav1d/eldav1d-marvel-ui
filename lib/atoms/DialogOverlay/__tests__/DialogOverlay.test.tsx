import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import DialogOverlay from '../DialogOverlay';

test('DialogOverlay is accesible for testing', () => {
  // ARRANGE
  const DIALOG_OVERLAY_TEST_ID = 'test-dialog-overlay';

  // ACT
  render(<DialogOverlay testId={DIALOG_OVERLAY_TEST_ID} />);

  const dialogOverlay = screen.getByTestId(DIALOG_OVERLAY_TEST_ID);

  // ASSERT
  expect(dialogOverlay).toBeInTheDocument();
});
