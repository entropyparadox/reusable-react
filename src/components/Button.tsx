import React, { FC } from 'react';

interface BarButtonProps {
  text: string;
  variant?: 'flat' | 'outlined';
  height?: 'h-13' | 'h-12';
  color?: 'brand-1' | 'gray-800' | 'gray-50' | 'kakao';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<BarButtonProps> = ({
  text,
  variant = 'flat',
  height = 'h-13',
  color = 'brand-1',
  disabled = false,
  onClick,
}) => {
  let border = variant === 'outlined' ? `border border-${color}` : 'border-0';
  let backgroundColor = variant === 'flat' ? `bg-${color}` : 'bg-white';
  let textColor = variant === 'flat' ? 'text-white' : `text-${color}`;
  if (color === 'gray-50') {
    textColor = 'text-gray-800';
  }
  if (color === 'kakao') {
    backgroundColor = 'bg-kakao-1';
    textColor = 'text-kakao-2';
  }

  return (
    <button
      className={`px-6 ${height} ${border} rounded-lg ${backgroundColor}
                  font-bold ${textColor}
                  disabled:border-gray-300 disabled:bg-gray-300 disabled:text-white`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
