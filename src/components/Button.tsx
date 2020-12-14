import React, { ButtonHTMLAttributes, FC } from 'react';

interface BarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'flat' | 'outlined';
  height?: 'h-13' | 'h-12';
  theme?: 'brand-1' | 'gray-800' | 'gray-50' | 'kakao';
}

export const Button: FC<BarButtonProps> = ({
  children,
  text,
  variant = 'flat',
  height = 'h-13',
  theme = 'brand-1',
  ...props
}) => {
  let border = variant === 'outlined' ? `border border-${theme}` : 'border-0';
  let backgroundColor = variant === 'flat' ? `bg-${theme}` : 'bg-white';
  let textColor = variant === 'flat' ? 'text-white' : `text-${theme}`;
  if (theme === 'gray-50') {
    textColor = 'text-gray-800';
  }
  if (theme === 'kakao') {
    backgroundColor = 'bg-kakao-1';
    textColor = 'text-kakao-2';
  }

  return (
    <button
      className={`px-6 ${height} ${border} rounded-lg ${backgroundColor}
                  font-bold ${textColor}
                  disabled:border-gray-300 disabled:bg-gray-300 disabled:text-white`}
      {...props}
    >
      {text ?? children}
    </button>
  );
};
