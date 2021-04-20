import React, { ButtonHTMLAttributes, FC } from 'react';
import { TW, TWProperties } from '../tailwind/tw';
import { BarButtonProps, Button } from './Button';

interface ToggleButtonProps extends BarButtonProps {
  text: string;
  active: boolean;
  tw?: TWProperties;
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  text,
  active,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: active ? 'bg-gray-800' : 'bg-gray-50',
    color: active ? 'text-white' : 'text-gray-800',
    height: 'h-12',
  }).merge(tw);

  return <Button text={text} tw={defaultTW} {...props} />;
};
