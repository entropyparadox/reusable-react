import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { BackIcon } from '../icons';
import { IconButton } from '../IconButton';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BackButton: FC<BackButtonProps> = ({ onClick, ...props }) => {
  const history = useHistory();

  return (
    <IconButton
      {...props}
      icon={BackIcon}
      onClick={onClick ?? (() => history.goBack())}
    />
  );
};
