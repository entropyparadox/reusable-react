import React, { FC, ReactElement } from 'react';

interface TopNavbarProps {
  title?: string;
  left?: ReactElement;
  right?: ReactElement;
  leftFlex?: 'flex-1' | 'flex-none';
  rightFlex?: 'flex-1' | 'flex-none';
  borderless?: boolean;
}

export const TopNavbar: FC<TopNavbarProps> = ({
  title,
  left,
  right,
  borderless = false,
  leftFlex = 'flex-1',
  rightFlex = 'flex-1',
}) => {
  const border = borderless ? 'border-0' : 'border-b';

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center px-2 h-fixed-top ${border} bg-white`}
    >
      <div className={`${leftFlex} flex items-center`}>{left}</div>
      <h1 className="font-bold text-gray-800">{title}</h1>
      <div className={`${rightFlex} flex flex-row-reverse items-center`}>
        {right}
      </div>
    </nav>
  );
};
