import React, { FC, forwardRef, HTMLAttributes } from 'react';
import { use100vh } from 'react-div-100vh';

interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'static' | 'fixed';
  top?: boolean;
  bottom?: boolean;
}

export const Screen = forwardRef<HTMLDivElement, ScreenProps>(
  (
    { children, position = 'static', top = false, bottom = false, ...props },
    ref,
  ) => {
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
      <div
        {...props}
        ref={ref}
        className={`${position} flex flex-col w-full`}
        style={{ height }}
      >
        {children}
      </div>
    );
  },
);
