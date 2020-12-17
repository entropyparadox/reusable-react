import React, { ButtonHTMLAttributes, FC } from 'react';

interface BarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'flat' | 'outlined';
  height?: 'h-13' | 'h-12' | 'h-11';
  rounded?: 'rounded-lg' | 'rounded-full';
  theme?: 'brand-1' | 'brand-2' | 'gray-800' | 'gray-50' | 'kakao';
}

export const Button: FC<BarButtonProps> = ({
  children,
  text,
  variant = 'flat',
  height = 'h-13',
  rounded = 'rounded-lg',
  theme = 'brand-1',
  ...props
}) => {
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
      className={`px-6 ${height} ${border} ${rounded} ${backgroundColor} font-bold ${textColor}
                  disabled:border-gray-300 disabled:${disabledBackgroundColor} disabled:${disabledTextColor}`}
    >
      {text ?? children}
    </button>
  );
};
