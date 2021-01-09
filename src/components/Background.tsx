import React, { FC } from 'react';

interface BackgroundProps {
  backgroundColor: 'bg-white' | 'bg-gray-50' | 'bg-gray-100';
}

export const Background: FC<BackgroundProps> = ({
  backgroundColor = 'bg-white',
}) => {
  return <div className={`fixed w-screen h-screen -z-10 ${backgroundColor}`} />;
};
