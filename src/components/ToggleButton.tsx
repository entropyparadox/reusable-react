import React, { ButtonHTMLAttributes, FC } from 'react';
import { BarButtonProps, Button } from './Button';

interface ToggleButtonProps extends BarButtonProps {
  text: string;
  active: boolean;
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  text,
  active,
  ...props
}) => {
  return (
    <Button
      {...props}
      text={text}
      height="h-12"
      theme={active ? 'gray-800' : 'gray-50'}
    />
  );
};
