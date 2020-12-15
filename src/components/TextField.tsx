import React, { FC, InputHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { Label } from './Label';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  label?: string;
}

export const TextField: FC<TextFieldProps> = ({
  type = 'text',
  label,
  ...props
}) => {
  const [htmlId] = useId(1, 'textfield');

  return (
    <div>
      {label && <Label text={label} htmlFor={htmlId} />}
      <input
        id={htmlId}
        type={type}
        className="block px-4 w-full h-12
                   border-gray-200 rounded-md sm:text-sm
                   focus:ring-0 focus:border-brand-1 placeholder-gray-400"
        {...props}
      />
    </div>
  );
};
