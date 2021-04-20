import React, { FC, TextareaHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { TW, TWProperties } from '../tailwind/tw';
import { Label } from './Label';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  tw?: TWProperties;
  twLabel?: TWProperties;
}

export const TextArea: FC<TextAreaProps> = ({
  label,
  tw = {},
  twLabel = {},
  ...props
}) => {
  const [htmlId] = useId(1, 'textarea');

  const defaultTW = new TW({
    borderColor: 'border-gray-200',
    borderRadius: 'rounded-md',
    borderWidth: 'border',
    display: 'block',
    height: 'h-48',
    paddingX: 'px-4',
    paddingY: 'py-2',
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

  const textarea = (
    <textarea id={htmlId} className={defaultTW.toClassName()} {...props} />
  );

  return label ? (
    <div>
      {label && <Label text={label} htmlFor={htmlId} tw={twLabel} />}
      {textarea}
    </div>
  ) : (
    textarea
  );
};
