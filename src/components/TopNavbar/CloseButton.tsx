import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../assets/images/icon-top-navbar-close.svg';
import { TopNavbarButton } from './TopNavbarButton';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CloseButton: FC<CloseButtonProps> = ({ onClick, ...props }) => {
  const history = useHistory();

  return (
    <TopNavbarButton
      icon={CloseIcon}
      onClick={onClick ?? (() => history.goBack())}
      {...props}
    />
  );
};
