import React, { ButtonHTMLAttributes, FC } from 'react';
import { HomeIcon } from '../icons';
import { IconButton } from '../IconButton';

interface HomeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const HomeButton: FC<HomeButtonProps> = ({ onClick, ...props }) => {
  return (
    <IconButton
      icon={<HomeIcon />}
      to={onClick ? undefined : '/'}
      onClick={onClick}
      {...props}
    />
  );
};
