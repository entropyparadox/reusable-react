import React, { FC, ReactElement } from 'react';

interface TopNavbarProps {
  title?: string;
  left?: ReactElement;
  right?: ReactElement;
  borderless?: boolean;
}

export const TopNavbar: FC<TopNavbarProps> = ({
  title,
  left,
  right,
  borderless = false,
}) => {
  const border = borderless ? 'border-0' : 'border-b';

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center px-2 h-fixed-top ${border} bg-white`}
    >
      <div className="flex-1 flex items-center">{left}</div>
      <h1 className="font-bold text-gray-800">{title}</h1>
      <div className="flex-1 flex flex-row-reverse items-center">{right}</div>
    </nav>
  );
};
