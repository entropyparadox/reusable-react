import React, { FC } from 'react';
import { use100vh } from 'react-div-100vh';

interface BlankProps {
  text?: string;
}

export const Blank: FC<BlankProps> = ({ text, children }) => {
  let vh = use100vh();
  const height = vh ? `${vh}px` : '100vh';

  if (!text && !children) {
    text = 'LOADING...';
  }

  return (
    <div
      className="fixed inset-0 w-full h-screen z-100 bg-black opacity-50 flex items-center justify-center"
      style={{ height }}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="text-white text-2xl">
        {text} {children}
      </div>
    </div>
  );
};
