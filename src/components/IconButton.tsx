import React, { ButtonHTMLAttributes, FC, SVGProps } from 'react';
import { Link } from 'react-router-dom';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  to?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  icon: Icon,
  to,
  ...props
}) => {
  const button = (
    <button {...props} className={`w-10 h-10`}>
      {<Icon /> ?? children}
    </button>
  );

  return to ? <Link to={to} children={button} /> : button;
};
