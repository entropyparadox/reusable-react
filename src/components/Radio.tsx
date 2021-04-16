import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { Color } from '../types/color';
import { Label } from './Label';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  theme?: Color;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export const Radio: FC<RadioProps> = ({
  label,
  theme = 'brand-1',
  labelProps = {},
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
          {...labelProps}
          text={label}
          htmlFor={htmlId}
          margin="m-0"
          fontSize="text-base"
        />
      )}
    </div>
  );
};
