import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
  tw?: TWProperties;
}

export const Background: FC<BackgroundProps> = ({
  children,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-white',
    height: 'h-screen',
    maxWidth: 'max-w-inherit',
    position: 'fixed',
    width: 'w-screen',
    zIndex: '-z-10',
  }).merge(tw);

  return (
    <div className={defaultTW.toClassName()} {...props}>
      {children}
    </div>
  );
};
