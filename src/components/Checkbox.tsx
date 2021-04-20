import React, { FC, InputHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { TW, TWProperties } from '../tailwind/tw';
import { Label } from './Label';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  tw?: TWProperties;
  twLabel?: TWProperties;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  tw = {},
  twLabel = {},
  ...props
}) => {
  const [htmlId] = useId(1, 'checkbox');

  const defaultTW = new TW({
    borderColor: 'border-gray-300',
    borderRadius: 'rounded',
    color: 'text-brand-1',
    height: 'h-4',
    width: 'w-4',
  }).merge(tw);

  return (
    <div className="flex items-center space-x-2">
      <input
        id={htmlId}
        type="checkbox"
        className={defaultTW.toClassName()}
        {...props}
      />
      {label && <Label text={label} htmlFor={htmlId} tw={twLabel} />}
    </div>
  );
};
