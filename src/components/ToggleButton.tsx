import React, { FC } from 'react';
import { Button } from './Button';

interface ToggleButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  text,
  active,
  onClick,
}) => {
  return (
    <Button
      text={text}
      height="h-12"
      color={active ? 'gray-800' : 'gray-50'}
      onClick={onClick}
    />
  );
};
