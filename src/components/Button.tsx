import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';

export interface BarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  variant?: 'flat' | 'outlined';
  height?: 'h-13' | 'h-12' | 'h-11' | 'h-8';
  rounded?: 'rounded' | 'rounded-lg' | 'rounded-full';
  fontSize?: 'text-xs' | 'text-sm' | 'text-base';
  theme?: 'brand-1' | 'brand-2' | 'black' | 'gray-800' | 'gray-50' | 'kakao';
}

export const Button: FC<BarButtonProps> = ({
  children,
  text,
  to,
  variant = 'flat',
  height = 'h-13',
  rounded = 'rounded-lg',
  fontSize = 'text-base',
  theme = 'brand-1',
  onClick,
  ...props
}) => {
  const history = useHistory();

  let border = variant === 'outlined' ? `border border-${theme}` : 'border-0';
  let backgroundColor = variant === 'flat' ? `bg-${theme}` : 'bg-white';
  let textColor = variant === 'flat' ? 'text-white' : `text-${theme}`;
  let disabledBackgroundColor =
    variant === 'flat' ? 'bg-gray-300' : backgroundColor;
  let disabledTextColor = variant === 'flat' ? 'text-white' : 'text-gray-300';

  if (theme === 'gray-50') {
    textColor = 'text-gray-800';
  }
  if (theme === 'kakao') {
    backgroundColor = 'bg-kakao-1';
    textColor = 'text-kakao-2';
  }

  return (
    <button
      {...props}
      className={`px-6 ${height} ${border} ${rounded} ${backgroundColor} font-bold ${fontSize} ${textColor}
                  disabled:border-gray-300 disabled:${disabledBackgroundColor} disabled:${disabledTextColor}`}
      onClick={to ? () => history.push(to) : onClick}
    >
      {text ?? children}
    </button>
  );
};
