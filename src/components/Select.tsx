import React, { useState, SelectHTMLAttributes, FC } from 'react';
import { useId } from 'react-id-generator';
import { Label } from '.';
import { ReactComponent as ArrowDown } from '../assets/images/select-arrow-down.svg';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  className,
  children,
  ...props
}) => {
  const [htmlId] = useId(1, 'select');
  return (
    <div>
      {label && <Label text={label} htmlFor={htmlId} />}
      <div
        className={`flex items-center p-4 rounded-lg w-full border-2 border-gray-800 my-1 focus-within:border-brand-1 ${className}`}
      >
        <select
          {...props}
          id={htmlId}
          className="outline-none w-full bg-gray-8 flex items-center text-lg text-gray-1 appearance-none rounded-none border-none"
        >
          {children}
        </select>
        <ArrowDown />
      </div>
    </div>
  );
};
