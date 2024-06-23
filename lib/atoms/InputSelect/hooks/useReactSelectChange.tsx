import { ChangeEventHandler } from 'react';
import { SingleValue } from 'react-select';

type SelectOption = string | { value: string; label: string };

export interface IUseReactSelectChange {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  selectName: string;
}

const useReactSelectChange = ({ onChange, selectName }: IUseReactSelectChange) => {
  const handleSelectChange = (newValue: SingleValue<SelectOption>) => {
    if (typeof newValue === 'string') {
      const newOption = { value: newValue, label: newValue };

      onChange({
        target: { value: newOption.value, name: selectName },
      } as React.ChangeEvent<HTMLSelectElement>);
    } else if (newValue) {
      onChange({
        target: { value: newValue.value, name: selectName },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  return handleSelectChange;
};

export default useReactSelectChange;
