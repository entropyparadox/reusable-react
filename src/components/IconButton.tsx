import React, { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  to?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  icon,
  to,
  ...props
}) => {
  const button = (
    <button {...props} className={`w-10 h-10`}>
      {icon ?? children}
    </button>
  );

  return to ? <Link to={to} children={button} /> : button;
};
