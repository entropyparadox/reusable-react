import React, { ButtonHTMLAttributes, FC } from 'react';
import { Link } from 'react-router-dom';
import { TW, TWProperties } from '../tailwind/tw';

interface BottomFixedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  tw?: TWProperties;
}

export const BottomFixedButton: FC<BottomFixedButtonProps> = ({
  children,
  text,
  to,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-brand-1',
    bottom: 'bottom-0',
    color: 'text-white',
    height: 'h-fixed-bottom',
    maxWidth: 'max-w-inherit',
    position: 'fixed',
    width: 'w-full',
    disabled: {
      backgroundColor: 'bg-gray-300',
    },
  }).merge(tw);

  const button = (
    <button className={defaultTW.toClassName()} {...props}>
      {text ?? children}
    </button>
  );

  return to ? <Link to={to} children={button} /> : button;
};
