import React, { FC } from 'react';
import { BackButton } from './BackButton';

interface TopNavbarProps {
  title: string;
  leftAction?: 'back';
  borderless?: boolean;
}

export const TopNavbar: FC<TopNavbarProps> = ({
  title,
  leftAction,
  borderless = false,
}) => {
  let leftButton = <></>;
  if (leftAction === 'back') {
    leftButton = <BackButton />;
  }

  let rightButton = <></>;

  const border = borderless ? '' : 'border-b';

  return (
    <nav
      className={`sticky top-0 flex items-center px-2 h-fixed-top ${border} bg-white`}
    >
      <div className="flex-1 flex items-center">{leftButton}</div>
      <h1 className="font-bold text-lg text-gray-800">{title}</h1>
      <div className="flex-1 flex flex-row-reverse items-center">
        {rightButton}
      </div>
    </nav>
  );
};
