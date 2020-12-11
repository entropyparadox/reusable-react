import React, { FC } from 'react';

interface ChipProps {
  text: string;
  margin?: 'm-0' | 'm-1';
  selected?: boolean;
  onClick?: () => void;
}

export const Chip: FC<ChipProps> = ({
  text,
  margin = 'm-1',
  selected = false,
  onClick,
}) => {
  const backgroundColor = selected ? 'bg-brand-1' : 'bg-gray-50';
  const color = selected ? 'text-white' : 'text-gray-800';

  return (
    <button
      className={`${margin} px-4 py-2 rounded-full ${backgroundColor}
                  whitespace-nowrap text-msm ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
