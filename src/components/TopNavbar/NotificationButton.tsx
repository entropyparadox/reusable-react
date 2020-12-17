import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NotificationIcon } from '../../assets/images/icon-top-navbar-notification.svg';
import { TopNavbarButton } from './TopNavbarButton';

interface NotificationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const NotificationButton: FC<NotificationButtonProps> = ({
  onClick,
  ...props
}) => {
  const history = useHistory();

  return (
    <TopNavbarButton
      {...props}
      icon={NotificationIcon}
      onClick={onClick ?? (() => history.push('/notifications'))}
    />
  );
};
