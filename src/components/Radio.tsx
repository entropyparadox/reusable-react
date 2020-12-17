import React, { FC, InputHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { Label } from './Label';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  theme?: 'brand-1' | 'brand-2';
}

export const Radio: FC<RadioProps> = ({
  label,
  theme = 'brand-1',
  ...props
}) => {
  const [htmlId] = useId(1, 'radio');

  return (
    <div className="flex items-center space-x-2">
      <input
        {...props}
        id={htmlId}
        type="radio"
        className={`focus:${theme} w-4 h-4 text-${theme} border-gray-300`}
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
