import React, { ButtonHTMLAttributes, FC } from 'react';

interface BoxTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  subText?: string;
  theme?: 'brand-1' | 'brand-2';
  active: boolean;
}

export const BoxTab: FC<BoxTabProps> = ({
  text,
  subText,
  theme = 'brand-1',
  active,
  ...props
}) => {
  const backgroundColor = active ? `bg-${theme}` : 'bg-gray-100';
  const textColor = active ? 'text-white' : 'text-gray-600';

  return (
    <button
      {...props}
      className={`flex-1 flex flex-col justify-center items-center
                  h-full ${backgroundColor}`}
    >
      <span className={`font-bold text-sm ${textColor}`}>{text}</span>
      {subText && <span className={`text-xs ${textColor}`}>{subText}</span>}
    </button>
  );
};
