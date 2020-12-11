import React, { FC } from 'react';

interface BottomFixedButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const BottomFixedButton: FC<BottomFixedButtonProps> = ({
  text,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className="fixed bottom-0 w-full h-12
                 bg-brand-1 text-white disabled:bg-gray-300"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
