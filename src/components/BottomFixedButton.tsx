import React, { ButtonHTMLAttributes, FC } from 'react';

interface BottomFixedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  reversed?: boolean;
}

export const BottomFixedButton: FC<BottomFixedButtonProps> = ({
  children,
  text,
  reversed = false,
  ...props
}) => {
  const backgroundColor = reversed ? 'bg-white' : 'bg-brand-1';
  const textColor = reversed ? 'text-brand-1' : 'text-white';

  return (
    <button
      className={`fixed bottom-0 w-full h-12
                  ${backgroundColor} ${textColor} disabled:bg-gray-300`}
      {...props}
    >
      {text ?? children}
    </button>
  );
};
