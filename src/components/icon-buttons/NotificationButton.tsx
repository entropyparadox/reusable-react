import React, { ButtonHTMLAttributes, FC } from 'react';
import { NotificationIcon } from '../icons';
import { IconButton } from '../IconButton';

interface NotificationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const NotificationButton: FC<NotificationButtonProps> = ({
  onClick,
  ...props
}) => {
  return (
    <IconButton
      {...props}
      icon={<NotificationIcon />}
      to={onClick ? undefined : '/notifications'}
      onClick={onClick}
    />
  );
};
