import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { CloseIcon } from '../icons';
import { IconButton } from '../IconButton';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CloseButton: FC<CloseButtonProps> = ({ onClick, ...props }) => {
  const history = useHistory();

  return (
    <IconButton
      icon={<CloseIcon />}
      onClick={onClick ?? (() => history.goBack())}
      {...props}
    />
  );
};
