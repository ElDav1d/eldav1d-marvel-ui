import React, { useEffect } from 'react';
import CheckboxGroup, { ICheckboxGroupProps } from '../CheckboxGroup/CheckboxGroup';

export interface ICheckboxListProps {
  /**
   * List of options to be displayed
   * @type {string[]}
   */
  options: string[];
  /**
   * Children to be rendered
   * should be a CheckboxGroup instance
   * @type {(option: string, index: number) => React.ReactElement<ICheckboxGroupProps>}
   */
  children: (option: string, index: number) => React.ReactElement<ICheckboxGroupProps>;
}

const CheckboxList = ({ options, children }: ICheckboxListProps) => {
  useEffect(() => {
    options.forEach((option, index) => {
      const child = children(option, index);
      if (React.isValidElement(child) && child.type !== CheckboxGroup) {
        throw new Error('Children must be an instance of CheckboxGroup');
      }
    });
  }, [options, children]);

  return (
    <ul className='md:h-full flex flex-col md:flex-row gap-2 md:items-center'>
      {options.map((option, index) => (
        <li className='flex items-center' key={`${option}${index}`}>
          {children(option, index)}
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
