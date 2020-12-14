import React, { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './Button';

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
      text={text}
      height="h-12"
      theme={active ? 'gray-800' : 'gray-50'}
      {...props}
    />
  );
};
