import React, { ButtonHTMLAttributes, FC } from 'react';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icon-top-navbar-hamburger.svg';
import { TopNavbarButton } from './TopNavbarButton';

interface HamburgerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const HamburgerButton: FC<HamburgerButtonProps> = ({ ...props }) => {
  return <TopNavbarButton icon={HamburgerIcon} {...props} />;
};
