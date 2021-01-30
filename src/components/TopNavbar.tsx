import React, { FC, ReactElement } from 'react';

interface TopNavbarProps {
  title?: string;
  left?: ReactElement;
  right?: ReactElement;
  position?: 'sticky' | 'fixed';
  borderless?: boolean;
  backgroundColor?: 'transparent' | 'white';
  leftFlex?: 'flex-1' | 'flex-none';
  rightFlex?: 'flex-1' | 'flex-none';
}

export const TopNavbar: FC<TopNavbarProps> = ({
  title,
  left,
  right,
  position = 'sticky',
  borderless = false,
  backgroundColor = 'white',
  leftFlex = 'flex-1',
  rightFlex = 'flex-1',
}) => {
  const positionAdditional =
    position === 'sticky' ? 'top-0' : 'top-0 left-0 right-0';
  const border = borderless ? 'border-0' : 'border-b';

  return (
    <nav
      className={`${position} ${positionAdditional} z-50 flex items-center
                  px-2 h-fixed-top ${border} bg-${backgroundColor}`}
    >
      <div className={`${leftFlex} flex items-center`}>{left}</div>
      <h1 className="font-bold text-gray-800">{title}</h1>
      <div className={`${rightFlex} flex flex-row-reverse items-center`}>
        {right}
      </div>
    </nav>
  );
};
