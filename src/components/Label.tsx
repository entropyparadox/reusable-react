import React, { FC } from 'react';

interface LabelProps {
  text: string;
  htmlFor?: string;
}

export const Label: FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 text-sm text-gray-800">
      {text}
    </label>
  );
};
