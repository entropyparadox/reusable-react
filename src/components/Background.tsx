import React, { FC } from 'react';

interface BackgroundProps {
  backgroundColor: 'white' | 'gray-50' | 'gray-100' | 'black';
}

export const Background: FC<BackgroundProps> = ({
  children,
  backgroundColor = 'white',
}) => {
  return (
    <div
      className={`fixed w-screen h-screen max-w-inherit -z-10 bg-${backgroundColor}`}
    >
      {children}
    </div>
  );
};
