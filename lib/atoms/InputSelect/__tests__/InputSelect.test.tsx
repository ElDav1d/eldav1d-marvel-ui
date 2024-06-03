import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import InputSelect from '../InputSelect';

const setHappyPath = () => {
  const mockOnChange = vi.fn();
  const passsedOptions = ['option1', 'option2'];
  const user = userEvent.setup();
  const NAME = 'test-name';

  return { mockOnChange, passsedOptions, user, NAME };
};

test('renders the select with the correct options', async () => {
  // ARRANGE
  const { mockOnChange, passsedOptions, user, NAME } = setHappyPath();

  render(
    <InputSelect
      placeholder='input select test'
      onChange={mockOnChange}
      options={passsedOptions}
      optionLiterals={passsedOptions}
      selectName={NAME}
    />,
  );

  // ACT
  const select = screen.getByRole('combobox');
  user.click(select);

  await waitFor(() => {
    const options = screen.getAllByRole('option');
    // ASSERT

    expect(options).toHaveLength(passsedOptions.length);

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(passsedOptions[index]);
    });
  });
});

test('calls onChange when an option is selected', async () => {
  // ARRANGE
  const { mockOnChange, passsedOptions, user, NAME } = setHappyPath();

  render(
    <InputSelect
      placeholder='input select test'
      onChange={mockOnChange}
      options={passsedOptions}
      optionLiterals={passsedOptions}
      selectName={NAME}
    />,
  );

  // ACT
  const select = screen.getByRole('combobox');
  user.click(select);

  await waitFor(() => {
    const option = screen.getByText(passsedOptions[1]);
    user.click(option);
  });

  // ASSERT
  await waitFor(() => {
    expect(mockOnChange).toHaveBeenCalledWith({
      target: { value: passsedOptions[1], name: NAME },
    });
  });
});

test('prevents infinite calls when the same option is selected multiple times', async () => {
  // ARRANGE
  const { mockOnChange, passsedOptions, user, NAME } = setHappyPath();

  render(
    <InputSelect
      placeholder='input select test'
      onChange={mockOnChange}
      options={passsedOptions}
      optionLiterals={passsedOptions}
      selectName={NAME}
    />,
  );

  // ACT
  const select = screen.getByRole('combobox');
  user.click(select);

  await waitFor(() => {
    const option = screen.getByText(passsedOptions[1]);
    user.click(option);
  });

  await waitFor(() => {
    const option = screen.getByText(passsedOptions[1]);
    user.click(option);
  });

  // ASSERT
  await waitFor(() => {
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
