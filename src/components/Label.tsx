import React, { FC } from 'react';

interface LabelProps {
  text?: string;
  htmlFor?: string;
  margin?: 'mb-1' | 'm-0';
  fontSize?: 'text-sm' | 'text-base';
}

export const Label: FC<LabelProps> = ({
  children,
  text,
  htmlFor,
  margin = 'mb-1',
  fontSize = 'text-sm',
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block ${margin} ${fontSize} text-gray-800`}
    >
      {text ?? children}
    </label>
  );
};
