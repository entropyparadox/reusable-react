import React, { ChangeEvent, FC } from 'react';
import { Label } from './Label';

interface TextFieldProps {
  type?: 'text' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      {label && <Label text={label} htmlFor={label} />}
      <input
        type={type}
        id={label}
        className="block px-4 w-full h-12
                   border-gray-200 rounded-md sm:text-sm
                   focus:ring-0 focus:border-brand-1 placeholder-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
