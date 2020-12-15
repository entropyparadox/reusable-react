import React, { FC, InputHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { Label } from './Label';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  theme?: 'brand-1' | 'brand-2';
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  theme = 'brand-1',
  ...props
}) => {
  const [htmlId] = useId(1, 'checkbox');

  return (
    <div className="flex items-center space-x-2">
      <input
        id={htmlId}
        type="checkbox"
        className={`focus:${theme} w-4 h-4 text-${theme} border-gray-300 rounded`}
        {...props}
      />
      {label && (
        <Label
          text={label}
          htmlFor={htmlId}
          margin="m-0"
          fontSize="text-base"
        />
      )}
    </div>
  );
};
