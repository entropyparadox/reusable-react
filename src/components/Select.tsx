import React, { useState, SelectHTMLAttributes, FC } from 'react';
import { useId } from 'react-id-generator';
import { ReactComponent as ArrowDown } from '../assets/images/select-arrow-down.svg';
import { Label } from './Label';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  placeholder,
  children,
  ...props
}) => {
  const [htmlId] = useId(1, 'select');
  return (
    <div>
      {label && <Label text={label} htmlFor={htmlId} />}
      <select
        {...props}
        id={htmlId}
        className="outline-none block px-4 w-full h-12 border border-gray-200 rounded-md sm:text-sm focus:ring-0 focus:border-brand-1 placeholder-gray-400 appearance-none rounded-none focus:appearance-none focus:no-underline focus:outline-none"
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
    </div>
  );
};
