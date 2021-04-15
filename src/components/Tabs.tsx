import React, { FC, HTMLAttributes } from 'react';

interface TabsProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
  padding?: 'p-0' | 'px-3';
  full?: boolean;
  height?: 'h-10' | 'h-16' | 'h-20';
  borderless?: boolean;
}

export const Tabs: FC<TabsProps> = ({
  children,
  full = false,
  sticky = false,
  padding = 'p-0',
  height = 'h-10',
  borderless = false,
}) => {
  const position = sticky ? 'sticky top-fixed-top z-50' : '';
  const border = borderless ? 'border-0' : 'border-b';
  const width = full ? 'w-full' : '';

  return (
    <nav
      className={`${position} ${width} flex overflow-x-auto ${padding} ${height} ${border} bg-white`}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      {children}
    </nav>
  );
};
