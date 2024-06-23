import { vi, test, expect } from 'vitest';
import useReactSelectChange from '../hooks/useReactSelectChange';
import { act, renderHook } from '@testing-library/react';

const SELECT_NAME = 'test-select';

const setHappyPath = () => {
  const onChange = vi.fn();
  const { result } = renderHook(() => useReactSelectChange({ onChange, selectName: SELECT_NAME }));

  return { onChange, result };
};

test('returns a function', () => {
  // ARRANGE
  const { result } = setHappyPath();

  // ASSERT
  expect(typeof result.current).toBe('function');
});

test('handles string input correctly', () => {
  // ARRANGE
  const { onChange, result } = setHappyPath();

  // ACT
  act(() => {
    result.current('string');
  });

  // ASSERT
  expect(onChange).toHaveBeenCalledWith({
    target: { value: 'string', name: SELECT_NAME },
  });
});

test('handles object input correctly', () => {
  // ARRANGE
  const { onChange, result } = setHappyPath();

  // ACT
  act(() => {
    result.current({ value: 'value', label: 'label' });
  });

  // ASSERT
  expect(onChange).toHaveBeenCalledWith({
    target: { value: 'value', name: SELECT_NAME },
  });
});

test('handles null input correctly', () => {
  // ARRANGE
  const { onChange, result } = setHappyPath();

  // ACT
  act(() => {
    result.current(null);
  });

  // ASSERT
  expect(onChange).not.toHaveBeenCalled();
});
