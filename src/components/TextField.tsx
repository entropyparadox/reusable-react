import React, { FC, InputHTMLAttributes, ReactHTMLElement } from 'react';
import { useId } from 'react-id-generator';
import { TW, TWProperties } from '../tailwind/tw';
import { Label } from './Label';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  feedback?: string;
  tw?: TWProperties;
  twLabel?: TWProperties;
  twFeedback?: TWProperties;
  twOuter?: TWProperties;
  ref?: any;
}

export const TextField: FC<TextFieldProps> = ({
  type = 'text',
  label,
  feedback,
  tw = {},
  twLabel = {},
  twFeedback = {},
  twOuter = {},
  ref,
  ...props
}) => {
  const [htmlId] = useId(1, 'textfield');

  const defaultTW = new TW({
    borderColor: 'border-gray-200',
    borderRadius: 'rounded-md',
    borderWidth: 'border',
    display: 'block',
    height: 'h-12',
    paddingX: 'px-4',
    placeholderColor: 'placeholder-gray-400',
    width: 'w-full',
    disabled: {
      backgroundColor: 'bg-gray-100',
      color: 'text-gray-400',
    },
    focus: {
      borderColor: 'border-brand-1',
      ring: 'ring-0',
    },
  }).merge(tw);

  const feedbackTW = new TW({
    color: 'text-red-400',
    fontSize: 'text-sm',
  }).merge(twFeedback);

  const outerTW = new TW({}).merge(twOuter);

  const input = (
    <input
      id={htmlId}
      type={type}
      className={defaultTW.toClassName()}
      ref={ref}
      {...props}
    />
  );

  return label ? (
    <div className={outerTW.toClassName()}>
      {label && <Label text={label} htmlFor={htmlId} tw={twLabel} />}
      {input}
      {feedback && <span className={feedbackTW.toClassName()}>{feedback}</span>}
    </div>
  ) : (
    input
  );
};
