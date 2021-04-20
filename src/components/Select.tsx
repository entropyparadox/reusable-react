import React, { useState, SelectHTMLAttributes, FC } from 'react';
import { useId } from 'react-id-generator';
import { TW, TWProperties } from '../tailwind/tw';
import { Label } from './Label';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  tw?: TWProperties;
  twLabel?: TWProperties;
}

export const Select: FC<SelectProps> = ({
  label,
  placeholder,
  children,
  tw = {},
  twLabel = {},
  ...props
}) => {
  const [htmlId] = useId(1, 'select');

  const defaultTW = new TW({
    appearance: 'appearance-none',
    borderColor: 'border-gray-200',
    borderRadius: 'rounded-md',
    borderWidth: 'border',
    display: 'block',
    height: 'h-12',
    paddingX: 'px-4',
    placeholderColor: 'placeholder-gray-400',
    outline: 'outline-none',
    width: 'w-full',
    focus: {
      appearance: 'appearance-none',
      borderColor: 'border-brand-1',
      ring: 'ring-0',
      outline: 'outline-none',
      textDecoration: 'no-underline',
    },
  }).merge(tw);

  return (
    <div>
      {label && <Label text={label} htmlFor={htmlId} tw={twLabel} />}
      <select id={htmlId} className={defaultTW.toClassName()} {...props}>
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
