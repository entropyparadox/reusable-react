import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

export interface BottomNavbarProps extends HTMLAttributes<HTMLElement> {
  tw?: TWProperties;
}

export const BottomNavbar: FC<BottomNavbarProps> = ({
  children,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-white',
    borderWidth: 'border-t',
    bottom: 'bottom-0',
    display: 'flex',
    height: 'h-fixed-bottom',
    maxWidth: 'max-w-inherit',
    position: 'fixed',
    width: 'w-full',
  }).merge(tw);

  return (
    <nav className={defaultTW.toClassName()} {...props}>
      {children}
    </nav>
  );
};
