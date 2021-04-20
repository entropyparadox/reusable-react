import React, { FC, LabelHTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  htmlFor?: string;
  tw?: TWProperties;
}

export const Label: FC<LabelProps> = ({
  children,
  text,
  htmlFor,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    color: 'text-gray-800',
    display: 'block',
    fontSize: 'text-sm',
    marginBottom: 'mb-1',
  }).merge(tw);

  return (
    <label htmlFor={htmlFor} className={defaultTW.toClassName()} {...props}>
      {text ?? children}
    </label>
  );
};
