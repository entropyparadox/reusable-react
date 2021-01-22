import React, { ButtonHTMLAttributes, FC } from 'react';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  selected?: boolean;
}

export const Chip: FC<ChipProps> = ({ text, selected = false, ...props }) => {
  const backgroundColor = selected ? 'bg-brand-1' : 'bg-gray-100';
  const color = selected ? 'text-white' : 'text-gray-800';

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-full ${backgroundColor}
                  whitespace-nowrap text-2sm ${color}`}
    >
      {text}
    </button>
  );
};
