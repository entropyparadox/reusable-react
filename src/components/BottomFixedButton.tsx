import React, { ButtonHTMLAttributes, FC } from 'react';
import { Link } from 'react-router-dom';

interface BottomFixedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  reversed?: boolean;
}

export const BottomFixedButton: FC<BottomFixedButtonProps> = ({
  children,
  text,
  to,
  reversed = false,
  ...props
}) => {
  const backgroundColor = reversed ? 'bg-white' : 'bg-brand-1';
  const textColor = reversed ? 'text-brand-1' : 'text-white';

  const button = (
    <button
      {...props}
      className={`fixed bottom-0 w-full h-12
                  ${backgroundColor} ${textColor} disabled:bg-gray-300`}
    >
      {text ?? children}
    </button>
  );

  return to ? <Link to={to} children={button} /> : button;
};
