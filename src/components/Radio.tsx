import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';
import { TW, TWProperties } from '../tailwind/tw';
import { Label } from './Label';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  tw?: TWProperties;
  twLabel?: TWProperties;
  twOuter?: TWProperties;
}

export const Radio: FC<RadioProps> = ({
  label,
  labelProps = {},
  tw = {},
  twLabel = {},
  twOuter = {},
  ...props
}) => {
  const [htmlId] = useId(1, 'radio');

  const defaultTW = new TW({
    borderColor: 'border-gray-300',
    color: 'text-brand-1',
    height: 'h-4',
    width: 'w-4',
  }).merge(tw);

  const labelTW = new TW({
    fontSize: 'text-base',
    margin: 'm-0',
  }).merge(twLabel);

  const outerTW = new TW({
    alignItems: 'items-center',
    display: 'flex',
    spaceX: 'space-x-2',
  }).merge(twOuter);

  return (
    <div className={outerTW.toClassName()}>
      <input
        id={htmlId}
        type="radio"
        className={defaultTW.toClassName()}
        {...props}
      />
      {label && (
        <Label htmlFor={htmlId} text={label} tw={labelTW} {...labelProps} />
      )}
    </div>
  );
};
