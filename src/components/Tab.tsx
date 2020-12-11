import React, { FC } from 'react';

interface TabProps {
  text: string;
  full?: boolean;
  color?: 'brand-1' | 'brand-2';
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Tab: FC<TabProps> = ({
  text,
  full = false,
  color = 'brand-1',
  active,
  onClick,
}) => {
  const flex = full ? 'flex-1' : '';
  const padding = full ? '' : 'px-2';
  const border = active ? 'border-b-2' : '';
  const bold = active ? 'font-bold' : '';
  const textColor = active ? `text-${color}` : 'text-gray-500';

  return (
    <button
      className={`${flex} flex justify-center items-end ${padding}`}
      onClick={onClick}
    >
      <span
        className={`flex items-center px-2 h-10 ${border} border-${color}
                    ${bold} text-sm ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};
