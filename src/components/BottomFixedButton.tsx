import React, { ButtonHTMLAttributes, FC } from 'react';

interface BottomFixedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const BottomFixedButton: FC<BottomFixedButtonProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <button
      className="fixed bottom-0 w-full h-12
                 bg-brand-1 text-white disabled:bg-gray-300"
      {...props}
    >
      {text ?? children}
    </button>
  );
};
