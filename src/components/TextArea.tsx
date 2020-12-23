import React, { FC, TextareaHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { Label } from './Label';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: FC<TextAreaProps> = ({ label, ...props }) => {
  const [htmlId] = useId(1, 'textarea');

  const textarea = (
    <textarea
      {...props}
      id={htmlId}
      className="block px-4 w-full h-52
                 border-gray-200 rounded-md sm:text-sm
                 focus:ring-0 focus:border-brand-1 placeholder-gray-400"
    />
  );

  return label ? (
    <div>
      {label && <Label text={label} htmlFor={htmlId} />}
      {textarea}
    </div>
  ) : (
    textarea
  );
};
