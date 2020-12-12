import React, { FC } from 'react';
import { use100vh } from 'react-div-100vh';

interface ScreenProps {
  top?: boolean;
  bottom?: boolean;
}

export const Screen: FC<ScreenProps> = ({
  children,
  top = false,
  bottom = false,
}) => {
  let vh = use100vh();
  const screenHeight = vh ? `${vh}px` : '100vh';
  let height = screenHeight;
  if (top) {
    height = `calc(${screenHeight} - 2.75rem)`;
  }
  if (bottom) {
    height = `calc(${screenHeight} - 3rem)`;
  }
  if (top && bottom) {
    height = `calc(${screenHeight} - 5.75rem)`;
  }

  return (
    <div className="flex flex-col" style={{ height }}>
      {children}
    </div>
  );
};
