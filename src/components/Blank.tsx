import React, { FC } from 'react';
import { use100vh } from 'react-div-100vh';

interface BlankProps {
  text?: string;
  reversed?: boolean;
}

export const Blank: FC<BlankProps> = ({ text, reversed, children }) => {
  let vh = use100vh();
  const height = vh ? `${vh}px` : '100vh';

  const backgroundColor = reversed ? 'bg-white' : 'bg-black';
  const textColor = reversed ? 'text-black' : 'text-white';

  if (!text && !children) {
    text = 'LOADING...';
  }

  return (
    <div
      className={`fixed inset-0 w-full h-screen z-100 ${backgroundColor} opacity-50 flex items-center justify-center`}
      style={{ height }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className={`${textColor} text-2xl`}>
        {text} {children}
      </div>
    </div>
  );
};
