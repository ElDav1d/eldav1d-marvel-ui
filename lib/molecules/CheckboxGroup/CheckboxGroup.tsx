import { Input } from '../../atoms/Input';

/**
 * Single checkbox within a group of characters filtering checkboxes
 * @interface
 */
export interface ICheckboxGroupProps {
  /**
   * @property {() => void}
   * Function to handle checkbox change event.
   */
  onChange: () => void;
  /**
   * @property {string}
   * Option corresponding to the checkbox.
   */
  option: string;
  /**
   * @property {string}
   * Literal corresponding to the option.
   */
  literal: string;
  /**
   * @property {boolean}
   * Flag to determine if the checkbox is checked.
   */
  isChecked: boolean;
}

const CheckboxGroup = ({ onChange, option, literal, isChecked }: ICheckboxGroupProps) => {
  return (
    <>
      <Input
        aria-label={option}
        type='checkbox'
        id={option}
        name={option}
        value={option}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={option}>{literal}</label>
    </>
  );
};

export default CheckboxGroup;
