import React, { ButtonHTMLAttributes, FC } from 'react';
import { HamburgerIcon } from '../icons';
import { IconButton } from '../IconButton';

interface HamburgerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const HamburgerButton: FC<HamburgerButtonProps> = ({ ...props }) => {
  return <IconButton {...props} icon={HamburgerIcon} />;
};
