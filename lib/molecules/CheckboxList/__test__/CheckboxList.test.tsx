import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import CheckboxList from '../CheckboxList';

test('renders a list', () => {
  // ARRANGE
  const options = ['option1', 'option2', 'option3'];

  // ACT
  render(
    <CheckboxList options={options}>
      {(option, index) => <div key={`${option}${index}`}>{option}</div>}
    </CheckboxList>,
  );

  // ASSERT
  expect(screen.getByRole('list')).toBeInTheDocument();
});

test('renders a list item for each option', () => {
  // ARRANGE
  const options = ['option1', 'option2', 'option3'];

  // ACT
  render(
    <CheckboxList options={options}>
      {(option, index) => <div key={`${option}${index}`}>{option}</div>}
    </CheckboxList>,
  );

  // ASSERT
  expect(screen.getAllByRole('listitem')).toHaveLength(options.length);
});
