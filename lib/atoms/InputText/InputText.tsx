import { getParentSelectors } from '@/utils/helpers';
import React from 'react';

/**
 * Props for text input
 */
export interface IInputTextProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Class name overrides for input.
   */
  className?: string;
}

const InputText: React.FC<IInputTextProps> = ({ className, ...rest }) => {
  const sharedInputStyle = `input py-2 px-3 ${getParentSelectors(className)}`;

  const getClassName = () => {
    return `${sharedInputStyle}`;
  };

  return <input type='text' className={getClassName()} {...(rest as IInputTextProps)} />;
};

export default InputText;
