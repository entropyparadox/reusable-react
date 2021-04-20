import React, { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { TW, TWProperties } from '../tailwind/tw';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  to?: string;
  tw?: TWProperties;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  icon,
  to,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    alignItems: 'items-center',
    display: 'flex',
    height: 'h-10',
    justifyContent: 'justify-center',
    width: 'w-10',
  }).merge(tw);

  const button = (
    <button className={defaultTW.toClassName()} {...props}>
      {icon ?? children}
    </button>
  );

  return to ? <Link to={to} children={button} /> : button;
};
