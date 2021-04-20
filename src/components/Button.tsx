import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TW, TWProperties } from '../tailwind/tw';

export interface BarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  variant?: 'flat' | 'outlined';
  tw?: TWProperties;
}

export const Button: FC<BarButtonProps> = ({
  children,
  text,
  to,
  variant = 'flat',
  tw = {},
  onClick,
  ...props
}) => {
  const history = useHistory();

  const defaultTW = new TW({
    backgroundColor: variant === 'flat' ? 'bg-brand-1' : 'bg-white',
    borderColor: 'border-brand-1',
    borderRadius: 'rounded-lg',
    borderWidth: variant === 'flat' ? 'border-0' : 'border',
    color: variant === 'flat' ? 'text-white' : 'text-brand-1',
    fontSize: 'text-base',
    fontWeight: 'font-bold',
    height: 'h-13',
    paddingX: 'px-6',
    disabled: {
      backgroundColor: variant === 'flat' ? 'bg-gray-300' : 'bg-white',
      borderColor: 'border-gray-300',
      color: variant === 'flat' ? 'text-white' : 'text-gray-300',
    },
  }).merge(tw);

  return (
    <button
      className={defaultTW.toClassName()}
      onClick={to ? () => history.push(to) : onClick}
      {...props}
    >
      {text ?? children}
    </button>
  );
};
