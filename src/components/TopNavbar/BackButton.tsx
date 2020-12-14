import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../assets/images/icon-top-navbar-back.svg';
import { TopNavbarButton } from './TopNavbarButton';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BackButton: FC<BackButtonProps> = ({ onClick, ...props }) => {
  const history = useHistory();

  return (
    <TopNavbarButton
      icon={BackIcon}
      onClick={onClick ?? (() => history.goBack())}
      {...props}
    />
  );
};
