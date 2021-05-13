import React, { FC, InputHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { Rounded } from '../types/rounded';
import { Label } from './Label';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  feedback?: string;
  feedbackColor?: string;
  rounded?: Rounded;
}

export const TextField: FC<TextFieldProps> = ({
  type = 'text',
  label,
  feedback,
  feedbackColor = 'text-red-400',
  rounded = 'rounded-md',
  ...props
}) => {
  const [htmlId] = useId(1, 'textfield');

  const input = (
    <input
      {...props}
      id={htmlId}
      type={type}
      className={`block px-4 w-full h-12 border
                 border-gray-200 ${rounded} sm:text-sm
                 focus:ring-0 focus:border-brand-1 placeholder-gray-400
                 disabled:bg-gray-100 disabled:text-gray-400`}
    />
  );

  return label ? (
    <div>
      {label && <Label text={label} htmlFor={htmlId} />}
      {input}
      {feedback && (
        <span className={`${feedbackColor} text-sm`}>{feedback}</span>
      )}
    </div>
  ) : (
    input
  );
};
