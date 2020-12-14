import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/images/icon-top-navbar-home.svg';
import { TopNavbarButton } from './TopNavbarButton';

interface HomeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const HomeButton: FC<HomeButtonProps> = ({ onClick, ...props }) => {
  const history = useHistory();

  return (
    <TopNavbarButton
      icon={HomeIcon}
      onClick={onClick ?? (() => history.push('/'))}
      {...props}
    />
  );
};
