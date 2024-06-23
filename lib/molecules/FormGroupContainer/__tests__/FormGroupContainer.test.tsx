import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import FormGroupContainer from '../FormGroupContainer';

test('renders FormGroupContainer', () => {
  // ARRANGE
  const TITLE = 'Form Group Container Title';

  // ACT
  render(
    <FormGroupContainer
      title={TITLE}
      classNameFieldset=''
      children='Form Group Container Children'
    />,
  );

  const group = screen.getByRole('group');

  // ASSERT
  expect(group).toBeInTheDocument();
});
