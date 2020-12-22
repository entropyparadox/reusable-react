import React, { useState, SelectHTMLAttributes, FC } from 'react';
import { ReactComponent as ArrowDown } from '../assets/images/select-arrow-down.svg';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({
  className,
  placeholder,
  onChange,
  children,
  ...props
}) => {
  let onChangeHandler;
  let [isPlaceHolder, setPlaceHolder] = useState(true);

  if (onChange) {
    onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e);
      setPlaceHolder(e.target.value === undefined);
    };
  } else {
    onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPlaceHolder(e.target.value === undefined);
    };
  }
  return (
    <div
      className={`flex items-center p-4 rounded-lg bg-gray-50 w-full border-2 border-gray-800 my-1 focus-within:border-brand-1 ${className}`}
    >
      <select
        className={
          isPlaceHolder
            ? 'outline-none w-full bg-gray-8 flex items-center text-lg text-gray-4'
            : 'outline-none w-full bg-gray-8 flex items-center text-lg text-gray-1'
        }
        onChange={onChangeHandler}
        {...props}
      >
        {placeholder ? (
          <option value={undefined} selected disabled hidden>
            {placeholder}
          </option>
        ) : (
          ''
        )}
        {children}
      </select>
      <ArrowDown />
    </div>
  );
};
